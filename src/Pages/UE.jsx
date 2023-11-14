import React, {useEffect, useState} from 'react';
import ueService from '../Services/ueService';
import UES from '../Components/UEComponent';
import NavbarScolarite from '../Components/Navbar';

const UE = () => {
    const [ue, setUE] = useState([]);

    const fetchUE = async () => {
        try {
            const response = await ueService.fetchUE();
            setUE(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUE()
    }, []);

    return <>
    <NavbarScolarite/>
    <div className={"d-flex flex-wrap justify-content-center gap-3 "}>
    {ue.map(ue => {
            return <UES key={ue.ue_id} ue={ue}/>
        })}
</div>
</>;

};

export default UE;