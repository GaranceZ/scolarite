import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import formateurService from '../Services/formateurService';
import NavbarScolarite from '../Components/Navbar';

const FormateurDetails = () => {
    const {id} = useParams();
    const [formateur, setFormateur] = useState({});

    const fetchFormateurByID = async () => {
        try {
            const response = await formateurService.fetchFormateurById(id);
            setFormateur(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFormateurByID()
    }, []);

    return <>
    <NavbarScolarite/>
        ID : {formateur.fo_id}
        <br></br>
        Nom : {formateur.fo_nom}
        <br></br>
        Prenom : {formateur.fo_prenom}
    </>;
};

export default FormateurDetails;