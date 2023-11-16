import React, {useEffect, useState} from 'react';
import formateurService from '../Services/formateurService';
import Formateurs from '../Components/FormateurComponent';
import NavbarScolarite from '../Components/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Formateur = () => {
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
    <Link to={'/formateur/create'}><Button>Ajouter un formateur</Button></Link>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {formateur.map(fo => {
            return <Formateurs key={fo.fo_id} formateur={fo}/>
        })}
    </div>
</>;

};

export default Formateur;