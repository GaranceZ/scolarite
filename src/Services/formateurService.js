import axios from 'axios';

function fetchFormateur(){
    return axios.get("http://127.0.0.1:8000/formateur")
}

function fetchFormateurById(id){
    return axios.get("http://127.0.0.1:8000/formateur/"+id)
}

export default {
    fetchFormateur,
    fetchFormateurById
}