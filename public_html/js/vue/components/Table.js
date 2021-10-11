Vue.component('table-component', {
    template: `
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" v-for="t, key in titulos" :key="key">{{t.titulo}}</th>
                    <th v-if="entrar.visivel"></th>
                    <th v-if="visualizar.visivel"></th>
                    <th v-if="atualizar.visivel"></th>
                    <th v-if="remover.visivel"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj, chave in dadosFiltrados" :key="chave">
                    <td v-for="valor, chaveValor in obj" :key="chaveValor">
                        <span v-if="titulos[chaveValor].tipo == 'texto'">{{valor | str_limit(30)  }}</span>
                        <span v-if="titulos[chaveValor].tipo == 'data'">
                            {{ valor | formataDataTempoGlobal }}
                        </span>
                        <span v-if="titulos[chaveValor].tipo == 'imagem'">
                            <img :src="valor" width="30" height="30">
                        </span>
                    </td>
                    <td>
                        <a v-if="entrar.visivel" class="btn" @click="entrarsite(obj,entrar.tipo)"><span data-width="20" data-height="20" class="iconify" data-icon="feather:external-link"></span> Entrar</a>
                    </td>
                    <td v-if="visualizar.visivel">
                        <a v-if="visualizar.visivel" class="btn" :data-bs-toggle="visualizar.dataToggle" :data-bs-target="visualizar.dataTarget" @click="setStore(obj)"><span data-width="20" data-height="20" class="iconify" data-icon="feather:eye"></span></a>
                    </td>
                    <td v-if="atualizar.visivel">
                        <a v-if="atualizar.visivel" class="btn" :data-bs-toggle="atualizar.dataToggle" :data-bs-target="atualizar.dataTarget" @click="setStore(obj)"><span data-width="20" data-height="20" class="iconify" data-icon="feather:edit"></span></a>
                    </td>
                    <td v-if="remover.visivel">
                        <a v-if="remover.visivel" class="btn btn-danger" :data-bs-toggle="remover.dataToggle"
                            :data-bs-target="remover.dataTarget" @click="setStore(obj)">
                            <span data-width="20" data-height="20" class="iconify" data-icon="feather:trash-2"></span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    props: ['dados', 'titulos', 'atualizar', 'visualizar', 'remover','entrar'],
    methods: {
        entrarsite(obj,tipo) {
            if(tipo == 'campeonato'){
                 window.location.href = appurl+"gernciarcompeticoes/"+obj.id;
            }else if(tipo == 'competicao'){
                 window.location.href = appurl+"gernciarquedas/"+obj.id;
            }else if(tipo == 'noticia'){
                 window.location.href = appurl+"editnoticia/"+obj.id;
            }else if(tipo == 'conta'){
                 window.location.href = appurl+"conta/"+obj.id;
            }
        },
        setStore(obj) {
            this.$store.state.transacao.status = ''
            this.$store.state.transacao.mensagem = ''
            this.$store.state.transacao.dados = ''
            this.$store.state.item = obj
        }
    },
    computed: {
        dadosFiltrados() {

            let campos = Object.keys(this.titulos)
            let dadosFiltrados = []

            this.dados.map((item, chave) => {

                let itemFiltrado = {}
                campos.forEach(campo => {

                    itemFiltrado[campo] = item[campo] //utilizar a sintaxe de array para atribuir valores a objetos
                })
                dadosFiltrados.push(itemFiltrado)
            })

            return dadosFiltrados //retorne um array de objetos
        }
    }
})