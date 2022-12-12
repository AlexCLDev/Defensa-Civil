import React from 'react'

export const History = () => {
  return (
    <>
      <div className='relative text-center overflow-scroll overscroll-contain'>
        <div className='md:grid md:grid-rows-3 md:grid-flow-col md:gap-4'>
          <img className="w-[200px] h-[200px] mx-auto md:row-span-3" src="https://defensacivil.gob.do/images/slide/2021/logoNuevoDefensa.png" />
          <h1 className='relative md:mx-auto md:text-2xl md:col-span-2 ml-0 mt-10'>History</h1>
          <h2 className='relative md:mx-auto md:text-lg md:row-span-2 ml-0'>Defensa Civil Dominicana</h2>
        </div>
        <div className='text-justify'>
          <p className='md:-mt-5 mt-10'>Antes del año 1966, cuando llegaba la temporada de huracanes,
            un grupo de radioaficionados se reunía en la Cruz Roja para estar atentos por si surgía algún tipo de
            emergencia, inmediatamente ponerse a disposición y ayudar en todo lo posible, inclusive, usando sus propios
            equipos de comunicación para así tener contacto con el exterior en caso de que las redes telefónicas resultaran
            afectadas.</p>
          <p className='mt-2'>
            Al surgir el triunvirato fue designado el Dr. Rafael Cantizano Arias, como presidente de la Cruz Roja y
            al mismo tiempo nombraron al Ing.
            Carlos D´ Franco como director de la Defensa Civil, quien con un grupo compuesto por seis personas,
            se instaló en la calle Francia esquina Galván, siendo esa la primera oficina de la Defensa Civil.
          </p>
          <p className='mt-2'>
            Al surgir el Gobierno Provisional, presidido por el Dr. Héctor García Godoy, a los diecisiete días del mes
            de junio de 1966, fue promulgada la Ley 257, mediante la cual fue creada la Defensa Civil, institución dependiente
            de la Secretaría Administrativa de la Presidencia (ahora Ministerio de la Presidencia) y quien en la actualidad
            preside la Comisión Nacional de Emergencias.
          </p>
          <p className='mt-2'>
            Más adelante, el local fue trasladado a la calle Dr. Delgado No. 164 y luego en la gestión del Contralmirante
            Radhamés Lora Salcedo se reubicó a la Plaza de la Salud, donde aún permanece.
          </p>
          <p className='mt-2'>
            Más adelante, el local fue trasladado a la calle Dr. Delgado No. 164 y luego en la gestión del Contralmirante
            Radhamés Lora Salcedo se reubicó a la Plaza de la Salud, donde aún permanece.
          </p>

        </div>
      </div>
    </>
  )
}
