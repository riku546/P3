<?php

namespace App\Http\Controllers;

use App\Http\Controllers\problemController;
use App\Lib\Gemini;
use Illuminate\Http\Request;

class requestAiController extends Controller
{
    //問題の生成とDBへの保存
    public function store(Request $request)
    {
        //geminiから問題文 ヒント 回答を取得
        $gemini_response = Gemini::getAIGeneratedText($request->programmingLang, $request->level);

        //geminiに生成してもらった問題 ヒント 回答をDBに保存
        problemController::saveProblems($gemini_response, $request);

        return response()->json($gemini_response);

    }
}
