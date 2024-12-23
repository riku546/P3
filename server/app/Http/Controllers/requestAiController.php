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

        $gemini = new Gemini($request);
        $res = $gemini->getAIGeneratedText();

        $problemController = new problemController();
        $problemController->saveProblems($res, $request);

        return response()->json($res);

    }
}
