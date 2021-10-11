<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-black fixed-top ">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand" href="{{route('home')}}">
        <img class="ms-5"src="{{ asset('uploads/images/logo/logoanimat.svg') }}" height="35px" alt="" loading="lazy"
         />
      </a>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i style="color: #C9CAF2;" class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse me-5" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="btn btn-link" aria-current="page" href="{{route('home')}}">Home</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a class="btn btn-link dropdown-toggle" href="#" role="button"
                id="dropdownMenuLink" data-mdb-toggle="dropdown" aria-expanded="false">
                Notícias
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="{{route('noticias','freefire')}}">Free Fire</a></li>
                <li><a class="dropdown-item" href="{{route('noticias','ps4')}}">PS4</a></li>
                <li><a class="dropdown-item" href="{{route('noticias','xbox')}}">Xbox</a></li>
                <li><a class="dropdown-item" href="{{route('noticias','wildrift')}}">Wild Rift</a></li>
                <li><a class="dropdown-item" href="{{route('noticias','outros')}}">Outros</a></li>
              </ul>
            </div>
          </li>
        </ul>
        @if(!Auth::user())
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0 m-2">
            <a class="nav-link btn btn-primary  btn-rounded" href="{{ route('login') }}" rel="nofollow">
              <i class="fas fa-sign-in-alt" aria-hidden="true"> Entrar </i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0 m-2">
            <a class="nav-link btn btn-success btn-rounded" href="{{ route('register') }}" rel="nofollow">
              <i class="fas fa-user-plus"> Registrar </i>
            </a>
          </li>
        </ul>
        @endif

        @auth
        <div class="dropdown">
          <a class=" m-5 dropdown-toggle" href="#" role="button"
            id="dropdownMenuLink" data-mdb-toggle="dropdown" aria-expanded="false">
            <img style="background-color: #D0D3D4;" src="../{{Auth::user()->image}}"
            class="rounded-circle" height="30" width="30" alt="" loading="lazy" />
          </a>

          <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuLink">
            <li>{{Auth::user()->name}}</li><br>
            <li>{{ Auth::user()->email }}</li><br>
            <li>
              <form class="p-2" method="POST" action="{{ route('logout') }}">
                @csrf
                <button class="btn btn-danger" type='submit'>Sair</button>
              </form>
            </li>
          </ul>
        </div>
        @endauth
      </div>
    </div>
  </nav>
  <!-- Navbar -->
</header>
<br>