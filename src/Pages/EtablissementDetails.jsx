import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import etablissementService from "../Services/etablissementService";
import NavbarScolarite from '../Components/Navbar';

const EtablissementDetails = () => {
    const {id} = useParams();
    const [etablissement, setEtablissement] = useState({});

    const fetchEtablissementById = async () => {
        try {
            const response = await etablissementService.fetchEtablissementById(id);
            setEtablissement(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtablissementById()
    }, []);

    return <>
    <NavbarScolarite/>
        ID : {etablissement.eta_id}
        <br></br>
        NOM : {etablissement.eta_nom}
        <br></br>
        VILLE : {etablissement.eta_ville}
    </>;
};

export default EtablissementDetails;