<?php

//このクラスはgeminiで問題文 ヒント 回答を生成してもらうクラス
//また、ユーザーから受け取った問題のレベルとプログラミング言語の情報を管理している

namespace App\Lib;

require_once "Function/generatePrompt.php";

use App\Lib\abstractClass\Ai;
use function App\Lib\Function\generatePrompt;
use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;

class Gemini extends Ai
{

    // geminiに問題文 ヒント 回答を生成してもらい、それを連想配列で返す
    public static function getAIGeneratedText($programmingLang, $level): array
    {

        try {

            //geminiとの通信
            $client = new Client(env('GEMINI_API_KEY'));
            $chat = $client->geminiPro()->startChat();

            //プロンプトを取得
            ["problemPrompt" => $problemPrompt, "hintPrompt" => $hintPrompt, "answerPrompt" => $answerPrompt] = generatePrompt($programmingLang, $level);

            // 問題文 ヒント 回答を生成してもらう
            $problem = $chat->sendMessage(new TextPart($problemPrompt));
            $hint = $chat->sendMessage(new TextPart($hintPrompt));
            $answer = $chat->sendMessage(new TextPart($answerPrompt));

            //連想配列にしているのは、後にデータベースに格納する際に使いやすいようにするため
            $response = [
                'problem' => $problem->text(),
                'hint' => $hint->text(),
                'answer' => $answer->text(),
            ];
            return $response;

        } catch (\Throwable $th) {
            throw $th;
        }

    }

}
