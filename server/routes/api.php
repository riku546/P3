<?php

use App\Http\Controllers\gptController;
use App\Http\Controllers\problemController;
use App\Http\Controllers\requestAiController;
use App\Http\Controllers\reviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/gpt', [gptController::class, 'returnAndSaveGptRes']);

//問題の生成と保存
Route::post('/generateProblem', [requestAiController::class, 'store']);

//レビュー（星）の新規登録と更新
Route::post("/review", [reviewController::class, 'processRequest']);

//レビュー（星）の削除
Route::delete("/deleteReview", [reviewController::class, 'deleteReview']);

//問題一覧ページに表示する問題データを取得
Route::get("/allProblems", [problemController::class, 'fetchAllProblems']);

//特定の問題のデータを取得
Route::get("/problem/{problemId}", [problemController::class, 'fetchProblem']);

//問題一覧ページと生成履歴ページでのフィルターに使用
Route::get("/filterProblems", [problemController::class, 'filterProblems']);

//ここから下はユーザごとのルート
//********************************************************************************************************************

//ユーザーが以前に解いたした問題を取得
Route::get("/personalProblems", [problemController::class, 'fetchPersonalProblems']);

//ユーザーが以前に作成した問題を削除
Route::delete("/deleteProblem", [problemController::class, 'deleteProblem']);
