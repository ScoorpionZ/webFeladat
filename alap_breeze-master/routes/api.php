<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TesztController;
use App\Http\Controllers\KategoriaController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/teszt', [TesztController::class, 'index']);
Route::get('/teszt/kategoria/{id}', [TesztController::class, 'update']);
Route::get('/kategoria', [KategoriaController::class, 'index']);