import axios from 'axios';

function fetchEtablissement(){
    return axios.get("http://127.0.0.1:8000/etablissement")
}

function fetchEtablissementById(id){
    return axios.get("http://127.0.0.1:8000/etablissement/"+id)
}

export default {
    fetchEtablissement,
    fetchEtablissementById
}