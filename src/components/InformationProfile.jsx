//import React from 'react'

const InformationProfile = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='py-2 text-[#03624e] text-center font-fontGeneral font-bold sm:text-lg lg:text-xl xl:text-2xl'>Perfil</h1>

            <div className='flex flex-col text-center sm:text-sm lg:text-lg xl:text-xl'>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Nombres</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Nombre1 Nombre2</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Apellidos</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Apellido1 Apellido2</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Tipo de Documento</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Cédula de ciudadanía</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Documento</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>0000000</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Ciudad</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Bogotá</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Municipio</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Bogotá</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Dirección</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Carrera 0 # 0 - 0</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Teléfono</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>9999999999</p>

                <button className='mx-auto mt-6 mb-2 px-6 py-2 max-w-[240px] rounded-full bg-[#03624e] text-white'>EDITAR</button>

            </div>

        </div>
    )
}

export default InformationProfile
