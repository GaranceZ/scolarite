import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import etudiantService from '../Services/etudiantService';
import NavbarScolarite from '../Components/Navbar';

const EtablissementDetails = () => {
    const {id} = useParams();
    const [etudiant, setEtudiant] = useState({});

    const fetchEtudiantByID = async () => {
        try {
            const response = await etudiantService.fetchEtudiantById(id);
            setEtudiant(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtudiantByID()
    }, []);

    return <>
    <NavbarScolarite/>
        ID : {etudiant.etu_id}
        <br></br>
        Nom : {etudiant.etu_nom}
        <br></br>
        Prenom : {etudiant.etu_prenom}
        <br></br>
        Numéro : {etudiant.etu_numero}
    </>;
};

export default EtablissementDetails;