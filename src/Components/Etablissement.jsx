import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Etablissement = ({etablissement}) => {
    return <>
        <Card className={"col-5"}>
            <Card.Body>
                <Card.Title className={'text-center'}>{etablissement.eta_nom}</Card.Title>
                <Card.Text>{etablissement.eta_ville}
                </Card.Text>
                <div className={'text-center'}>
                <Link to={"/etablissement/"+etablissement.eta_id}><Button variant="primary" >Voir Etablissement</Button></Link>
                </div>
            </Card.Body>
        </Card>
    </>;
};

export default Etablissement;