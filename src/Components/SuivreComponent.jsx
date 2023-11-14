import React, {useEffect, useState} from 'react';
import suivreService from '../Services/suivreService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Suivres = ({suivre}) => {
    return <>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{suivre.etu_nom} {suivre.etu_prenom} suit {suivre.ue_label}</Card.Title>
                <Link to={"/suivre/etudiant/" + suivre.etu_id}><Button variant="primary" className='m-4'>Voir Cours suivi de l'étudiant</Button></Link>
                <Link to={"/suivre/ue/" + suivre.ue_id}><Button variant="primary">Voir tous les étudiants qui suivent ce cours</Button></Link>
            </Card.Body>
        </Card>
        
    </>;
}
export default Suivres;