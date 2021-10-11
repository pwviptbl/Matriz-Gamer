/* interceptar os requests da aplicação */
const axios = require('axios');


axios.interceptors.request.use(
    config => {
        //deinifir para todas as requisições os parâmetros de accept e autorization
        config.headers['Accept'] = 'application/json'

        //recuperando o token de autorização dos cookies
        let token = document.cookie.split(';').find(indice => {
            return indice.includes('token=')
        })
        token = token.split('=')[1]
        token = 'Bearer ' + token
        config.headers.Authorization = token
        console.log('Interceptando o request antes do envio', config)
        return config
    },
    error => {
        console.log('Erro na requisição: ', error)
        return Promise.reject(error)
    }
)

/* interceptar os responses da aplicação */
axios.interceptors.response.use(
    response => {
        console.log('Interceptando a resposta antes da aplicação', response)
        return response
    },
    error => {
        console.log('Erro na resposta: ', error.response)
        if (error.response.status == 401 && error.response.data.message == 'Token has expired') {
            console.log('Fazer uma nova requisição para rota refresh')
            axios.post('https://matrizgamer.com/api/refresh')
            .then(response => {
                console.log('Refresh com sucesso: ', response)
                document.cookie = 'token='+response.data.token
                console.log('Token atualizado: ', response.data.token)
                window.location.reload()
            })
        }
        return Promise.reject(error)
    }
)