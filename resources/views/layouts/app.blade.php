<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <!-- webpushs -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <meta name="author" content="Marcio Junior">
  <meta name="generator" content="Matriz Gamer 0.1">
  <meta name="description" content="plataforma de interatividade entre jogadores e organizadores de eventos relacionados a campeonatos de esportes eletrônicos (e-sports)">
  <meta charset="UTF-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <!-- BOOTSTRAP 5 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"rel="stylesheet" />

  <!-- Google Fonts Roboto -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
  <!-- Custom styles -->
  <link rel="shortcut icon" href="{{ asset('uploads/images/logo/ico2.jpeg') }}">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta property="fb:app_id" content="353675803158349" />
  <meta property="og:url" content="https://matrizgamer.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Matriz Gamer" />
  <meta property="og:description" content="plataforma de interatividade entre jogadores e organizadores de eventos relacionados a campeonatos de esportes eletrônicos (e-sports)" />
  <meta property="og:image" content="{{ asset('uploads/images/logo/ico2.jpeg') }}../" />
  <link rel="shortcut icon" href="{{ asset('uploads/images/logo/ico2.jpeg') }}" />
  <!--title>{{ config('app.name', 'MatrizGamer') }}</title-->
  <title>Matriz Gamer</title>
</head>
<body>
  @include('layouts.header')
  <main class="container mt-3">
    {{ $slot }}
  </main>
  <!--Footer-->
  @include('layouts.footer')
  <!-- MDB -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></script>
  <!-- VUE -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js"></script>
  <script src="{{ asset('js/vue/axios.min.js') }}"></script>
  <!-- Components Vue -->
  <script src="{{ asset('js/vue/components/Home.js') }}"></script>
  <script src="{{ asset('js/vue/components/404.js') }}"></script>
  <script src="{{ asset('js/vue/components/Noticias.js') }}"></script>
  <script src="{{ asset('js/vue/components/Noticia.js') }}"></script>
  <script src="{{ asset('js/vue/app.js') }}"></script>
</body>
</html>