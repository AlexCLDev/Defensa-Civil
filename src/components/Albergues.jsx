import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Albergues = () => {
    const [loading, setLoading] = useState(true);
    const [albergues, setAlbergues] = useState([])

    const getAlbergues = async () => {
        setLoading(true)
        try {
            axios.get('https://adamix.net/defensa_civil/def/albergues.php')
                .then((response) => {
                    console.log(response);
                    const albergues = response.data;
                    setAlbergues(albergues)
                })
        } catch (error) {
            console.error(error.message);
        }

        setLoading(false)
    }

    useLayoutEffect(() => {
        getAlbergues();
        console.log(albergues)
    }, [])
    return (
        <>


            {albergues.datos ?
                <>
                    {albergues.datos.map((albergue) => (
                        <div key={albergue.id} className='max-w-[500px] md:p-4 mt-10 pl-2 pt-1 pb-1 text-[10px] bg-[#1f1f1f] flex justify-between hover:bg-white hover:text-black'>
                            <h1 className='text-xl md:text-2xl'>{albergue.ciudad}</h1>
                            <FontAwesomeIcon icon={faArrowRight} className="h-10 mt-4 mr-3 md:mr-0"/>
                        </div>
                    ))}
                </>
                :
                <h1></h1>
            }
        </>
    )
}
