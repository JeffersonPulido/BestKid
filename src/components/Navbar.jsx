//import React from 'react'
import LogoSencillo from '../../public/images/LOGO_SENCILLO.webp'

const Navbar = () => {
    return (
        <div className='bg-white-ice-50 justify-self-center justify-items-center w-full px-1 py-1 h-8 lg:h-9 xl:h-10 lg:justify-self-center xl:justify-self-center '>
            <img src={LogoSencillo} className='h-8 justify-self-center align-self-center lg:h-9 xl:h-10'></img>
        </div>
    )
}

export default Navbar
