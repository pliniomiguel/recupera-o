import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3030'
})

export default class Api{
    async listar(){
        let r = await api.get('/lista');
        return r.data;
    }
    async inserir(){
        let r = await api.post('/lista'), {id_nome};
        return r.data;
    }

}