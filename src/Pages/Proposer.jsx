import React, {useEffect, useState} from 'react';
import proposerService from '../Services/proposerService';
import NavbarScolarite from '../Components/Navbar';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Proposer = () => {
    const [proposer, setProposer] = useState([]);

    const fetchProposer = async () => {
        try {
            const response = await proposerService.fetchProposer();
            setProposer(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProposer()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
        {proposer.map((prop, index) => {
            return <Card className={"col-2"} key={"proposer_"+index}>
                <Card.Body>
                    <Card.Title className={'text-center'}>{prop.eta_nom} propose {prop.ue_label}</Card.Title>
                    <Link to={"/proposer/etablissement/"+prop.eta_id}><Button variant="primary" className={"m-4"}>Voir Cours proposé par l'établissement</Button></Link>
                    <Link to={"/proposer/ue/"+prop.ue_id}><Button variant="primary">Voir tous les établissement qui proposent ce cours</Button></Link>
                </Card.Body>
            </Card>
        })}
</div>
</>;
}
 
export default Proposer;