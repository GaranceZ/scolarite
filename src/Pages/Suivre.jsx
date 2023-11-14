import React, {useEffect, useState} from 'react';
import suivreService from '../Services/suivreService';
import Suivres from '../Components/SuivreComponent';
import NavbarScolarite from '../Components/Navbar';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Suivre = () => {
    const [suivre, setSuivre] = useState([]);

    const fetchSuivre = async () => {
        try {
            const response = await suivreService.fetchSuivre();
            setSuivre(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchSuivre()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
        {suivre.map((sui, index) => {
            return <Card className={"col-2"} key={"suivre_"+index}>
                <Card.Body>
                    <Card.Title className={'text-center'}>{sui.etu_nom} {sui.etu_prenom} suit {sui.ue_label}</Card.Title>
                    <Link to={"/suivre/etudiant/"+sui.etu_id}><Button variant="primary" className={"m-4"}>Voir Cours suivi de l'etudiant</Button></Link>
                    <Link to={"/suivre/ue/"+sui.ue_id}><Button variant="primary">Voir tous les etudiants qui suivent ce cours</Button></Link>
                </Card.Body>
            </Card>
        })}
</div>
</>;
}
export default Suivre;