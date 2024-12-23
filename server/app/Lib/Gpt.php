<?php
namespace App\Lib;


use Illuminate\Http\JsonResponse;
use Orhanerday\OpenAi\OpenAi;

class Gpt
{

    public static function requestGpt(object $prompt): JsonResponse
    {
        $open_ai = new OpenAi(env('GPT_API_KEY'));

        $response = $open_ai->chat([
            "model" => "gpt-4o",
            "messages" => [
                [
                    "role" => "system",
                    "content" => "あなたはプログラミングの先生です。",
                ],
                [
                    "role" => "user",
                    "content" => $prompt->prompt,
                ],
            ],
        ]);

        return response()->json($response);
    }

}