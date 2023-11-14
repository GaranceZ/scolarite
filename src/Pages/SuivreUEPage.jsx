import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import suivreService from '../Services/suivreService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarScolarite from '../Components/Navbar';

const SuivreUEPage = () => {

    const{id} = useParams();
    const [suivreUE, setSuivreUE] = useState([]);


    const fetchSuivreUE = async () => {
        try{
            const response = await suivreService.fetchSuivreUE(id);
            setSuivreUE(response.data);
        } catch(e){
            console.log(e);
        }
    }

    useEffect (() => {
        fetchSuivreUE()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={'text-center'}>
    <h1>{suivreUE[0] != undefined && suivreUE[0].ue_label}</h1>
    </div>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {suivreUE.map((suiUE, index) => {
        return <Card style={{ width: '18rem' }} key={"suiUE"+index}>
            <Card.Body>
                <Card.Title className={'text-center'}>{suiUE.etu_nom} {suiUE.etu_prenom}</Card.Title>
                <div className={'text-center'}>
                <Link to={'/etudiant/'+ suiUE.etu_id}><Button variant="primary">Voir Étudiant</Button></Link>
                </div>
            </Card.Body>
        </Card>
    })}
    </div>
</>;
}
 
export default SuivreUEPage;