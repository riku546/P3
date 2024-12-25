<?php

namespace App\Http\Controllers;

use App\Models\Problems;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function filterProblems(Request $request)
    {

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
