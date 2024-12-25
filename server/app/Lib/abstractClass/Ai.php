<?php

//GeminiクラスやGptクラスの親クラス

namespace App\Lib\abstractClass;

abstract class Ai
{
    abstract public static function getAIGeneratedText($programmingLang, $level): array;
}
