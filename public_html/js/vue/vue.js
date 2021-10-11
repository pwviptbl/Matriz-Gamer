new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      link: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://freefirecup.com/testeapi')
      .then(response => {
        console.log(response.data.first_page_url)
        this.info = response.data.data
        this.link = response.data.links
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
