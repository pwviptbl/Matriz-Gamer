<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoticiaController;
use App\Mail\Noticia;

Route::get('/',function () {
    return view('home');
  })->name('home');

//Noticias
//ver noticia
Route::get('/noticia/{id}',
  function () {
    return view('noticia');
  })->name('noticia');;
//noticias com parametro
Route::get('/noticias/{game?}',
  function () {
    return view('noticias');
  })->name('noticias');

require __DIR__.'/auth.php';