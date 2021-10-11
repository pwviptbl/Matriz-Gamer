Vue.component('Home', {
  template: `
  
  <section class="text-center mt-3">
    <h4 class="mb-5"><strong>Ultimas notícias</strong></h4>
    <div class="row" >
      <div class="col-lg-4 col-md-12 mb-5 p-2" v-for="dado in lista.data">
        <div class="card">
          <a v-bind:href="'../noticia/'+dado.id">
            <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
              <img :src=" dado.image " style=" height: 200px;"  class="img-fluid rounded" />
            </div>
            <div class="card-body">
              <h5  class="card-title text-success">{{ dado.title | str_limit(60) }}</h5>
            </div>
            <div class="card-footer text-warning">{{dado.created_at | formataData  }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col">
      <div class="d-flex justify-content-center">
        <paginate-component>
          <li v-for="l, key in lista.links" :key="key" 
          :class="l.active ? 'page-item active' : 'page-item'"
          @click="paginacao(l)" >
            <a class="page-link" v-html="l.label"></a>
          </li>
        </paginate-component>
      </div>
    </div>
  </div>
  </section>
  
  
  
  `,
  data() {
    return {
      dado: [],
      urlBase: appurl+'api/noticias/all',
      urlPaginacao: '',
      urlFiltro: '',
      lista: {
        data: []
      }
    }
  },
  methods: {
    paginacao(l) {
      if (l.url) {
        this.urlBase = l.url //ajustando a url de consulta com o parâmetro de página
        this.urlPaginacao = l.url.split('?')[1]
        this.carregarLista() //requisitando novamente os dados para nossa API
      }
    },
    carregarLista() {
      let url = this.urlBase
      axios.get(url)
      .then(response => {
        this.lista = response.data
      })
      .catch(errors => {
        console.log(errors)
      })
    }
  },
  mounted() {
    this.carregarLista()
  }
})