import React, {useEffect, useState} from 'react';
import etudiantService from '../Services/etudiantService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Etudiants = ({etudiant}) => {
    return <>
            <Card className={"col-2"}>
            <Card.Body>
                <Card.Title className={'text-center'}>ID : {etudiant.etu_id}</Card.Title>
                <Card.Text>{etudiant.etu_prenom} {etudiant.etu_nom}</Card.Text>
                <Card.Text>{etudiant.etu_numero}</Card.Text>
                <div className={'text-center'}>
                    <Link to={"/etudiant/"+etudiant.etu_id}><Button variant="primary">Details Etudiant</Button></Link>
                </div>
            </Card.Body>
        </Card>
        
    </>;
}

export default Etudiants;