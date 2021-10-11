<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NoticiaMensagem extends Mailable
{
    use Queueable, SerializesModels;

   
  public $u;
  public $titulo;
  public $image;
  public $e;
 
  public function __construct($id, $titulo, $image,$email) {
    $this->u = config('app.url').'noticia/'.$id;
    $this->titulo = $titulo;
    $this->image = config('app.url').$image;
    $this->e = config('app.url').'unistall/'.$email;
  }


  public function build() {
    return $this->markdown('emails.noticia',['u' => $this->u,
    't' =>$this->titulo,'i' => $this->image,'e' => $this->e]);
  }
}