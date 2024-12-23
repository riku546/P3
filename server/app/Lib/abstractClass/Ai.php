<?php

//GeminiクラスやGptクラスの親クラス

namespace App\Lib\abstractClass;

abstract class Ai
{
    private string $problemLevel;
    private string $programmingLang;
    abstract public function getAIGeneratedText(): array;
}
