<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\RoatosController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoticiaController;


Route::prefix('v1')->middleware('jwt.auth')->group(function() {
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
});
//Resultado

Route::middleware('auth:api')->get('/user',
    function (Request $request) {
        return $request->user();
    });

//Busca 6 ultimas notaicias para a Home
Route::get('/noticias/{game}', [NoticiaController::class, 'index']);
//Busca noticia pelo ID
Route::get('/noticia/{id}', [NoticiaController::class, 'showid']);

Route::post('login', [AuthController::class, 'login']);
Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');