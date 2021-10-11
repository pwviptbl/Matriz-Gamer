@component('mail::message')


<a href="{{$u}}">
  <h1 style="color: #000000;" >{{$t}}</h1>
  <img src="{{$i}}">
</a>




@component('mail::button', ['url' => "{$u}"])
Confira
@endcomponent
<br>
<br>
<br>




Obrigado,<br>
{{ config('app.name') }}
<br>
<br>
<br>
Não deseja receber emails ?
@component('mail::button', ['url' => "{$e}"])
Descadastrar
@endcomponent
@endcomponent

