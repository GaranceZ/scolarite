import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import proposerService from '../Services/proposerService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import NavbarScolarite from '../Components/Navbar';

const ProposerEtablissement = () => {
    const {id} = useParams();
    const [proposerEtablissement, setProposerEtablissement] = useState([]);
   
    const fetchProposerEtablissement = async () => {
        try{
            const response = await proposerService.fetchProposerEtablissement(id);
            setProposerEtablissement(response.data);
        } catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchProposerEtablissement()
    }, []);
    
    return <>
    <NavbarScolarite/>
    <div className={'text-center'}>
        <h1>{proposerEtablissement[0] != undefined && proposerEtablissement[0].eta_nom}</h1>
    </div>
        <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
        {proposerEtablissement.map((propEta, index) => {
            return <Card className={"col-2"} key={"propEta"+index}>
                <Card.Body>
                    <Card.Title className={'text-center'}>{propEta.ue_label}</Card.Title>
                    <div className={'text-center'}>
                    <Link to={'/ue/'+propEta.ue_id}><Button variant="primary">Voir UE</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        
        })}
        </div>
    </>;

}
 
export default ProposerEtablissement;