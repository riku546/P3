<?php

namespace App\Http\Controllers;

use App\Lib\Gpt;
use Illuminate\Http\Request;

class gptController extends Controller
{
    public function returnAndSaveGptRes(Request $request)
    {
        try {
            $res = Gpt::requestGpt($request);

            return $res;

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}