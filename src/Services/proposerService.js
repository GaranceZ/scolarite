import axios from 'axios';

function fetchProposer(){
    return axios.get("http://127.0.0.1:8000/proposer")
}

function fetchProposerUE(id){
    return axios.get("http://127.0.0.1:8000/proposer/"+id+"/ue")
}

function fetchProposerEtablissement(id){
    return axios.get("http://127.0.0.1:8000/proposer/"+id+"/etablissement")
}


export default {
    fetchProposer,
    fetchProposerUE,
    fetchProposerEtablissement
}