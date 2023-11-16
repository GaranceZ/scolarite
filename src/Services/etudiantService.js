import axios from 'axios';

function fetchEtudiant(){
    return axios.get("http://127.0.0.1:8000/etudiant")
}

function fetchEtudiantById(id){
    return axios.get("http://127.0.0.1:8000/etudiant/"+id)
}

function addEtudiant(etudiant){
    return axios.post("http://127.0.0.1:8000/etudiant", etudiant,  {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export default {
    fetchEtudiant,
    fetchEtudiantById, 
    addEtudiant
}