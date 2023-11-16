import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formateurService from '../Services/formateurService';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import NavbarScolarite from '../Components/Navbar';

const CreateFormateur = () => {

    const [formateur, setFormateur] = useState({
        mail : '',
        nom: '',
        prenom: '',
        adresse: '',
        numero: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) =>{
        const{name, value} = event.currentTarget;
        setFormateur({...formateur, [name]: value});

    };
    
    const handleAdd = () => {
        try{
            const response = formateurService.addFormateur(formateur);
            toast.success("Le formateur "+ formateur.nom + ' ' + formateur.prenom + " à bien été crée");
            setTimeout(() => {
                navigate("/formateur");}, 2000)
        }catch (e){
            console.log(e)
        }
        console.log(formateur)
    }


    return <>
    <NavbarScolarite/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control type="email" name="mail" placeholder="Entrer email" value={formateur.mail} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" name="nom" placeholder="Entrer Nom" value={formateur.nom} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" name="prenom" placeholder="Entrer prénom" value={formateur.prenom} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse postale</Form.Label>
        <Form.Control type="text" name="adresse" placeholder="Entrer n° rue" value={formateur.adresse} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="text" name="numero" placeholder="Entrer numéro de téléphone" value={formateur.numero} onChange={handleChange} maxLength={10}/>
      </Form.Group>

      <Button variant="primary" onClick={handleAdd}>
        Envoyer
      </Button>
    </Form>
    </>;
}
 
export default CreateFormateur;