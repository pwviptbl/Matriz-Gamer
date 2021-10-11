
Vue.component('Noticia', {
  template: `
<div class="mt-5">
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <div class="row ">
        <div class="col-12 col-md-9">
          <div class="card bg-dark text-white">
            <img :src="link2" class="card-img" alt="..." />
            <div class="card-img-overlay">
            <!--  <h1 class="card-title">{{lista.title}}</h1> -->
            </div>
          </div>
          <h3 class="text-dark mb-3">{{lista.title}}</h3>
          <p class="mb-5">
            Post de <span v-html="lista.by"></span> <span>  |  {{lista.created_at | formataData  }}</span>
          </p>
          <span v-html="lista.text"></span>
          <hr>
          <div class="fb-like" :data-href="link" data-width=""
          data-layout="button_count" data-action="like" data-size="small" data-share="true">
          </div>
          
          
          <br>
          <div class="fb-comments" :data-href="link" data-width="100%" data-numposts="5"></div>
        </div>

        <div class="col-12 col-md-3">
          <div class="row">
            <div class="col-12 mb-2" v-for="dado in listaultimo.data">
              <a v-bind:href="'../noticia/'+dado.id">
                <div class="card" style="width: 100%;">
                  <img :src="'../'+dado.image" class="card-img-top" />
                  <div class="card-body">
                    <p style="color: #000000;" class="card-text">
                      {{ dado.title | str_limit(60) }}...
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  data() {
    return {
      dado: [],
      link: '',
      link2 :'',
      urlBase: appurl+'api/noticia/',
      urlultimo: appurl+'api/noticias/all',
      lista: {
        data: []
      },
      listaultimo: {
        data: []
      }
    }
  },
  methods: {
    carregarLista() {
      var gurl = window.location.href; 
      var res = gurl.split('/'); 
      let url = this.urlBase+res[4]
      this.link = appurl+'noticia/'+res[4]
      axios.get(url)
      .then(response => {
        this.lista = response.data
        this.link2 = appurl+response.data.image
        
      })
      .catch(errors => {
        console.log(errors)
      })
    },
    carregarUltimo() {
      let url = this.urlultimo
      axios.get(url)
      .then(response => {
        this.listaultimo = response.data
      })
      .catch(errors => {
        console.log(errors)
      })
    }
  },
  mounted() {
    this.carregarLista()
    this.carregarUltimo()
    }
})