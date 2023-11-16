import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ueService from '../Services/ueService';
import Formateurs from '../Components/FormateurComponent';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import formateurService from '../Services/formateurService';
import NavbarScolarite from '../Components/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const CreateUE = () => {

    const [ue, setUE] = useState({
        label : '',
        formateur: '',
        categorie: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) =>{
        const{name, value} = event.currentTarget;
        setUE({...ue, [name]: value});

    };
    
    const handleAdd = () => {
        try{
            const response = ueService.addUE(ue);
            toast.success("L'UE' "+ ue.label + ' avec le formateur ' + ue.formateur + " à bien été crée");
            setTimeout(() => {
                navigate("/ue");}, 2000)
        }catch (e){
            console.log(e)
        }
        console.log(ue)
    }

        const [formateur, setFormateur] = useState([]);
    
        const fetchFormateur = async () => {
            try {
                const response = await formateurService.fetchFormateur();
                setFormateur(response.data)
            } catch (e) {
                console.log(e)
            }
        }
    
        useEffect(() => {
            fetchFormateur()
        }, []);


    return <>
    <NavbarScolarite/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Label UE</Form.Label>
        <Form.Control type="text" name="label" placeholder="Entrer UE" value={ue.label} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Catégorie</Form.Label>
        <Form.Control type="text" name="categorie" placeholder="Entrer Nom" value={ue.categorie} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prénom</Form.Label>
        <Dropdown as={ButtonGroup}>
      <Button variant="success">Formateur</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
      {formateur.map(fo => {
            return <Dropdown.Item href="#/action-1">{fo.fo_nom} {fo.fo_prenom}</Dropdown.Item>
        })}
       
      </Dropdown.Menu>
    </Dropdown>
      </Form.Group>

     
      <Button variant="primary" onClick={handleAdd}>
        Envoyer
      </Button>
    </Form>
    </>;
}
 

export default CreateUE;