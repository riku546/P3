<?php

namespace App\Http\Controllers;

use App\Models\Problems;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class problemController extends Controller
{
    //問題一覧ページに表示する問題データを取得
    public function fetchAllProblems(): JsonResponse
    {
        try {
            $problems = Problems::all();
            return response()->json($problems);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //問題単体の情報を取得
    public function fetchProblem(int $problemId): JsonResponse
    {
        try {
            $problem = Problems::where('id', $problemId)->first();
            return response()->json($problem);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    // この関数は問題をレベルとプログラミング言語によってフィルターをする
    //問題一覧ページと生成履歴ページでのフィルターに使用
    public function filterProblems(string $lang, string $level)
    {
        try {

            //フィルターされていない場合
            if ($level == 'all' && $lang == 'all') {
                $all_problems = DB::select("SELECT * FROM problems");
                return response()->json($all_problems);
            }
            //プログラミング言語でフィルターされた場合
            elseif ($level == 'all' && $lang != 'all') {
                $filtered_problems_by_lang = DB::select("SELECT * FROM problems WHERE programmingLang = ?", [$lang]);
                return response()->json($filtered_problems_by_lang);
            }
            //レベルでフィルターされた場合
            elseif ($level != 'all' && $lang == 'all') {
                $filtered_problems_by_level = DB::select("SELECT * FROM problems WHERE level = ?", [$level]);
                return response()->json($filtered_problems_by_level);
            }
            //レベルとプログラミング言語でフィルターされた場合
            elseif ($level != 'all' && $lang != 'all') {
                $filtered_problems_by_lang_and_level = DB::select("SELECT * FROM problems WHERE level = ? AND programmingLang = ?", [$level, $lang]);
                return response()->json($filtered_problems_by_lang_and_level);
            }

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //生成した問題をDBに保存
    //引数 $resはAiが生成した物  $requestはフロントから渡されたデータ
    public static function saveProblems(array $res, object $request): void
    {
        try {
            $problem = new Problems();
            //postmanするときは、Auth::id()使えない
            $problem->user_id = Auth::id();
            // $problem->user_id = 1;
            $problem->problem = $res['problem'];
            $problem->hint = $res['hint'];
            $problem->answer = $res['answer'];
            $problem->level = $request['level'];
            $problem->programmingLang = $request['programmingLang'];
            $problem->save();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //ゆーざーが以前に解いた問題を取得
    public function fetchPersonalProblems(): JsonResponse
    {
        try {
            //ログインしているゆーざーのIDを取得
            $userId = Auth::id();
            // $userId = 1;
            $problems = problems::where('user_id', $userId)->get();
            return response()->json($problems);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    //ゆーざーが以前に生成した問題を削除
    public function deleteProblem(Request $request): void
    {
        try {
            $problem = Problems::find($request->problemId);
            $problem->delete();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
