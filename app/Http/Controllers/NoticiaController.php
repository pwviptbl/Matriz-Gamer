<?php

namespace App\Http\Controllers;

use App\Models\Email;
use App\Models\Noticia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use CoffeeCode\Uploader\Image;
use App\Models\NewsImage;
use Illuminate\Support\Facades\DB;
use Auth;
use CoffeeCode\Cropper\Cropper;
use Illuminate\Support\Facades\Mail;
use App\Mail\NoticiaMensagem;

class NoticiaController extends Controller {

  public function index($game) {
    if ($game == 'all') {
      $noticias = Noticia::orderBy('id', 'DESC')->paginate(6);
      return json_encode($noticias);
    } else {
      $noticias = Noticia::where('game', $game)->orderBy('id', 'DESC')->paginate(6);
      return json_encode($noticias);
    }
  }

  public function create() {
    if (Auth::user()->type == 3 || Auth::user()->type == 4 || Auth::user()->type == 5) {
      return view('criarnoticia');
    } else {
      header("Location:".route('home'));
    }

  }

  public function store(Request $request) {
    if (Auth::user()->type == 3 || Auth::user()->type == 4 || Auth::user()->type == 5) {
      $image = new Image("uploads", "images", 500);
      if ($_FILES) {
        try {
          $upload = $image->upload($_FILES['file'], md5(rand(0, 999999999999999)));
          if ($upload) {
            $noticia = new Noticia();
            $noticia->title = $request->title;
            $noticia->text = $request->editor1;
            $noticia->image = $upload;
            $noticia->game = $request->game;
            $noticia->by = auth()->user()->name;
            $noticia->user_id = auth()->user()->id;
            $noticia->save();

            try {
              foreach (Email::all() as $e) {
                Mail::to($e->email)->send(
                  new NoticiaMensagem($noticia->id, $noticia->title, $noticia->image, $e->email));
              }
            }catch (Exception $e) {
              header("Location:".route('criarnoticia'));
            }

            header("Location:".route('criarnoticia'));
          }
        } catch (Exception $e) {
          echo "<p>(!) {$e->getMessage()}</p>";
        }
      }
    } else {
      header("Location:".route('home'));
    }

  }

  public function showid($id) {
    $noticia = Noticia::find($id);
    return json_encode($noticia);

  }

  public function edit($id) {
    $noticia = Noticia::find($id);
    if (Auth::user()->type == 3 || Auth::user()->type == 4 &&
      Auth::user()->id === $noticia->user_id || Auth::user()->type == 5) {
      return view('editarnoticia', compact('noticia'));
    } else {
      header("Location:".route('home'));
    }
  }


  public function update(Request $request) {
    $noticia = Noticia::find($request->id);
    if ($noticia === null) {
      header("Location:".route('home'));
    }
    if (Auth::user()->type == 3 || Auth::user()->type == 4 &&
      Auth::user()->id === $noticia->user_id || Auth::user()->type == 5) {
      $noticia->fill($request->all());
      $noticia->save();
     header("Location:".route('noticia',$request->id));
    } else {
      header("Location:".route('home'));
    }




  }

  public function destroy(Noticia $noticia) {
    //
  }
}