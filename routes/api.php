<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Ruta validación user
Route::post('/admin_login', [\App\Http\Controllers\LoginController::class, 'adminLogin']);

//Ruta logout
Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'logout']);

//Ruta crud DailyTask
Route::resource(
    'dailytask',
    \App\Http\Controllers\DailyTaksController::class
)->only(['index', 'store', 'update', 'show', 'destroy']);



