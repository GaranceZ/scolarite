import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import proposerService from '../Services/proposerService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarScolarite from '../Components/Navbar';

const ProposerUEPage = () => {

    
    const{id} = useParams();
    const [proposerUE, setProposerUE] = useState([]);

    const fetchProposerUE = async () => {
        try{
            const response = await proposerService.fetchProposerUE(id);
            setProposerUE(response.data);
        } catch(e){
            console.log(e);
        }
    }

    useEffect (() => {
        fetchProposerUE()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={'text-center'}>
    <h1>{proposerUE[0] != undefined && proposerUE[0].ue_label}</h1>
    </div>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {proposerUE.map((propUE, index) => {
        return <Card style={{ width: '18rem' }} key={"propUE"+index}>
            <Card.Body>
                <Card.Title className={'text-center'}>{propUE.eta_nom}</Card.Title>
                <div className={'text-center'}>
                <Link to={'/etablissement/'+ propUE.eta_id}><Button variant="primary">Voir Établissement</Button></Link>
                </div>
            </Card.Body>
        </Card>
    })}
    </div>
</>;

}

export default ProposerUEPage;