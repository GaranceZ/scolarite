import React, {useEffect, useState} from 'react';
import etablissementService from "../Services/etablissementService";
import Etablissement from "../Components/Etablissement";
import NavbarScolarite from '../Components/Navbar';

const HomePage = () => {
    const [etablissements, setEtablissements] = useState([]);

    const fetchEtablissement = async () => {
        try {
            const response = await etablissementService.fetchEtablissement();
            setEtablissements(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtablissement()
    }, []);


    return <>
        <NavbarScolarite/>
        <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
        {etablissements.map(eta => {
            return <Etablissement key={eta.eta_id} etablissement={eta}/>
        })}
        </div>
    </>;

};

export default HomePage;