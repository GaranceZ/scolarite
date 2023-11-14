import React, {useEffect, useState} from 'react';
import etudiantService from '../Services/etudiantService';
import Etudiants from '../Components/EtudiantComponent';
import NavbarScolarite from '../Components/Navbar';
const Etudiant = () => {
    const [etudiants, setEtudiant] = useState([]);

    const fetchEtudiant = async () => {
        try {
            const response = await etudiantService.fetchEtudiant();
            setEtudiant(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtudiant()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {etudiants.map(etu => {
            return <Etudiants key={etu.etu_id} etudiant={etu}/>
        })}
    </div>

</>;

};

export default Etudiant;