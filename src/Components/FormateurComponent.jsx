import React, {useEffect, useState} from 'react';
import ueService from '../Services/ueService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Formateurs = ({formateur}) => {
    return <>
            <Card className={"col-2"}>
            <Card.Body>
                <Card.Title>ID : {formateur.fo_id}</Card.Title>
                <Card.Text>{formateur.fo_prenom} {formateur.fo_nom}</Card.Text>
                <div className={'text-center'}>
                <Link to={"/formateur/"+formateur.fo_id}><Button variant="primary">Details formateur</Button></Link>
                </div>
            </Card.Body>
        </Card>
        
    </>;
}

export default Formateurs;