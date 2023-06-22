import React from 'react'

const createAccount = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='py-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Crear cuenta con</h1>
            <button className='my-4 mx-auto px-6 py-2 rounded-full bg-[#DB4437] text-white text-center sm:text-sm lg:text-lg xl:text-xl'>
                <img></img>
                <p>Gmail</p>
            </button>

            <button className='my-4 mx-auto px-6 py-2 rounded-full bg-[#1977F3] text-white text-center sm:text-sm lg:text-lg xl:text-xl'>
                <img></img>
                <p>Facebook</p>
            </button>

            <div className='flex flex-col text-center sm:text-sm lg:text-lg xl:text-xl'>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Nombres</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Nombres' type='text' ></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Apellidos</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Apellidos' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Tipo de Documento</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Tipo de documento' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Documento</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Documento' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Ciudad</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Ciudad' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Municipio</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Municipio' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Dirección</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Dirección' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Teléfono</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Teléfono' type='number'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Contraseña</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Contraseña' type='text'></input>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Repetir la contraseña</p>
                <input className='mx-auto justify-center max-w-screen-sm rounded-full border-2 border-[#045042] text-[#ff5a23] text-center sm:text-sm lg:text-lg xl:text-xl' placeholder='Repetir Contraseña' type='text'></input>

                <button className='mx-auto mt-6 mb-2 px-6 py-2 max-w-[240px] rounded-full bg-[#03624e] text-white'>ENVIAR</button>

            </div>

        </div>
    )
}

export default createAccount
