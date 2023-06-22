//import React from 'react'

const SellProducts = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col text-center font-semibold sm:text-sm lg:text-lg xl:text-xl'>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Precio</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>$9.999.999 COP</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>NOmbre del Producto</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Carruaje para bebé</p>
                <p className='mt-6 pt-2 text-[#03624e] text-center sm:text-sm lg:text-lg xl:text-xl'>Categoría</p>
                <p className='mx-auto justify-center px-6 max-w-screen-sm rounded-full border-2 border-[#045042] text-[#00B288] text-center sm:text-sm lg:text-lg xl:text-xl'>Carruajes y otros</p>

                {/* mb-4 font-semibold text-[#03624e] dark:text-white */}
                <ul className='flex flex-row justify-around my-3'>
                    <li className='w-50% border-gray-100 sm:border-b-0 sm:border-r dark:border-gray-600'>
                        <div className='flex items-center pl-3'>
                            <input id='vue-checkbox-list' type='checkbox' value='' className='w-4 h-4 text-[#03624e] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'></input>
                            <label className="w-45% py-3 ml-2 text-sm font-medium text-[#045042]">Nuevo</label>
                        </div>
                    </li>
                    <li className='w-50% border-gray-100 sm:border-b-0 sm:border-r dark:border-gray-600'>
                        <div className='flex items-center pl-3'>
                            <input id='vue-checkbox-list' type='checkbox' value='' className='w-4 h-4 text-[#03624e] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'></input>
                            <label className="w-45% py-3 ml-2 text-sm font-medium text-[#045042]">Usado</label>
                        </div>
                    </li>
                </ul>

                <div className='mx-auto'>
                    <label className='block mx-1 my-3 text-sm font-semibold text-[#045042] '>Descripción</label>
                    <input type='text' id='' className='my-5 block w-95% p-4 text-[#03624e] border border-[#045042] rounded-lg bg-gray-50 sm:text-sm focus:ring-green-500 focus:border-green-700'></input>
                </div>

                <button className='mx-auto mt-6 mb-2 px-6 py-2 max-w-[240px] rounded-full bg-[#03624e] text-white'>VENDER</button>
            </div>

            <div id='' className='relative w-full' data-carousel='slide'>
                {/* Carousel Wrapper */}
                <div className='relative h-56 overflow-hidden rounded-lg sm:h-76 md:h-96'>
                    {/* Item 1 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>
                    {/* Item 2 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>
                    {/* Item 3 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>
                    {/* Item 4 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>
                    {/* Item 5 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>
                    {/* Item 6 */}
                    <div className='hidden duration-1000 ease-in-out' data-carousel-item>
                        <img className='absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-[#03624e] rounded-lg w-[80%] h-[80%]' src='../../public/images/OSO.webp'></img>
                    </div>

                    {/* Slider indicators */}
                    <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>

                    {/* Slider Controls */}
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>

                </div>

                <div className='flex flex-col'>
                    <button className='mx-auto mt-6 mb-2 px-6 py-2 max-w-[240px] rounded-full bg-[#03624e] text-white'>SUBIR FOTOS</button>
                </div>
            </div>
        </div>
    )
}

export default SellProducts