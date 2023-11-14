import React, {useEffect, useState} from 'react';
import ueService from '../Services/ueService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const UES = ({ue}) => {
    return <>
            <Card className={"col-2"}>
            <Card.Body>
                <Card.Title>ID : {ue.ue_id}</Card.Title>
                <Card.Text>{ue.ue_label}</Card.Text>
                <div className={'text-center'}>
                <Link to={"/ue/"+ue.ue_id}><Button variant="primary">Details UE</Button></Link>
                </div>
            </Card.Body>
        </Card>
        
    </>;
}

export default UES;