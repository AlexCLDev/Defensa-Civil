import React, { useEffect, useLayoutEffect, useState } from 'react'
import Axios from 'axios'
import axios from 'axios'

export const Miembros = () => {
    const [miembros, setMiembros] = useState([])

    const getMembers = async() => {
        try {
            axios.get('https://adamix.net/defensa_civil/def/miembros.php')
            .then((response) => {
                console.log(response);
                const members = response.data;
                setMiembros(members)
            }) 
        }catch(error){
            console.error(error.message);
        }

    }

    useLayoutEffect(()=>{
        getMembers();
        console.log(miembros)
    }, [])

    return (
        <>
        



            {miembros.datos ? 
            <>
            {miembros.datos.map((miembro) => (
                <div className='max-w-[500px] mt-10 md:p-10 md:pt-20 p-4 bg-[#1f1f1f]'>
                    <img src={miembro.foto} />
                    <h1>{miembro.nombre}</h1>
                    <h2>{miembro.cargo}</h2>
                </div>
            ))}
            </>
        :
        <h1></h1>}
        </>
    )
}
