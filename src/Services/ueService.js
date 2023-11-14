import axios from 'axios';

function fetchUE(){
    return axios.get("http://127.0.0.1:8000/ue")
}

function fetchUEById(id){
    return axios.get("http://127.0.0.1:8000/ue/"+id)
}

export default {
    fetchUE,
    fetchUEById
}