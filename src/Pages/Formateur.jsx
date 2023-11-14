import React, {useEffect, useState} from 'react';
import formateurService from '../Services/formateurService';
import Formateurs from '../Components/FormateurComponent';
import NavbarScolarite from '../Components/Navbar';

const Formateur = () => {
    const [formateur, setFormateur] = useState([]);

    const fetchFormateur = async () => {
        try {
            const response = await formateurService.fetchFormateur();
            setFormateur(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFormateur()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {formateur.map(fo => {
            return <Formateurs key={fo.fo_id} formateur={fo}/>
        })}
    </div>
</>;

};

export default Formateur;