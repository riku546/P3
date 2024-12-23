<?php
//Aiに送るプロンプトを生成する関数

namespace App\Lib\Function;

function generatePrompt(string $programmingLang, string $level): array
{
    $problemPrompt = "{$programmingLang}の問題を1つ出してください。または { $level }でお願いします。問題文以外の情報は不要です。";
    $hintPrompt = "先程の問題のヒントを出してください。";
    $answerPrompt = "先程の問題に対する回答をお願いします。また 解説は不要です。 コードだけを提出してください。";

    return [
        'problemPrompt' => $problemPrompt,
        'hintPrompt' => $hintPrompt,
        'answerPrompt' => $answerPrompt,
    ];
}
