import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import suivreService from '../Services/suivreService';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import NavbarScolarite from '../Components/Navbar';

const SuivreEtudiant = () => {

    const {id} = useParams();
    const [suivreEtudiant, setSuivreEtudiant] = useState([]);
    const fetchSuivreEtudiant = async () => {
        try{
            const response = await suivreService.fetchSuivreEtudiant(id);
            setSuivreEtudiant(response.data);
        } catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchSuivreEtudiant()
    }, []);


    return <>
    <NavbarScolarite/>
    <div className={'text-center'}>
        <h1>{suivreEtudiant[0] != undefined && suivreEtudiant[0].etu_nom}</h1>
        <h1>{suivreEtudiant[0] != undefined && suivreEtudiant[0].etu_prenom}</h1>
    </div>
        <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
        {suivreEtudiant.map((suiEtu, index) => {
            return <Card className={"col-2"} key={"suiEtu"+index}>
                <Card.Body>
                    <Card.Title className={'text-center'}>{suiEtu.ue_label}</Card.Title>
                    <div className={'text-center'}>
                    <Link to={'/ue/'+suiEtu.ue_id}><Button variant="primary">Voir L'ue</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        
        })}
        </div>
    </>;
}
 
export default SuivreEtudiant;