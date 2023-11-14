import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ueService from '../Services/ueService';
import NavbarScolarite from '../Components/Navbar';

const UEDetails = () => {
    const {id} = useParams();
    const [ue, setUE] = useState({});

    const fetchUEByID = async () => {
        try {
            const response = await ueService.fetchUEById(id);
            setUE(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUEByID()
    }, []);

    return <>
        <NavbarScolarite/>
        ID : {ue.ue_id}
        <br></br>
        Label : {ue.ue_label}
    </>;
};

export default UEDetails;