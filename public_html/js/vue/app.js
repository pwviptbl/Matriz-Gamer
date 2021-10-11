Vue.use(Vuex);
const appurl = 'https://matrizgamer.com/';
const appname = 'Matriz Gamer';
const store = new Vuex.Store({
  state: {
    item: {},
    transacao: {
      status: '', mensagem: '', dados: ''
    }
  }
})

function erro(page, erros) {}


Vue.filter('str_limit', function (value, size) {
  if (!value) return '';
  value = value.toString();

  if (value.length <= size) {
    return value;
  }
  return value.substr(0, size) + '...';
});

Vue.filter('formataDataTempoGlobal', function(d) {
  if (!d) return ''

  d = d.split('T')

  let data = d[0]
  let tempo = d[1]

  //formatando a data
  data = data.split('-')
  data = data[2] + '/' + data[1] + '/' + data[0]

  //formatar o tempo
  tempo = tempo.split('.')
  tempo = tempo[0]

  return data + ' ' + tempo
})
Vue.filter('formataData', function(d) {
  if (!d) return ''

  d = d.split('T')

  let data = d[0]
  let tempo = d[1]

  //formatando a data
  data = data.split('-')
  data = data[2] + '/' + data[1] + '/' + data[0]

  //formatar o tempo
  tempo = tempo.split('.')
  tempo = tempo[0]

  return data
})
new Vue({
  el: "#app",
  store
})