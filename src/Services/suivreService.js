import axios from 'axios';

function fetchSuivre(){
    return axios.get("http://127.0.0.1:8000/suivre")
}

function fetchSuivreEtudiant(id){
    return axios.get("http://127.0.0.1:8000/suivre/"+id+"/etudiant")
}

function fetchSuivreUE(id){
    return axios.get("http://127.0.0.1:8000/suivre/"+id+"/ue")
}


export default {
    fetchSuivre,
    fetchSuivreEtudiant,
    fetchSuivreUE
}