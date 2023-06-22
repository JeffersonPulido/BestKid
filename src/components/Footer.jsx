import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <section className="py-8 bg-green-900">
                <div className="mx-10 pb-4 text-center">
                    <h1 className="font-fontTitleBold text-[35px] sm:text-lg tracking-wide text-green-200"> best mar<span className="text-whiteGreen-50">kid </span></h1>
                </div>
                <div className="mx-10 flex-grow border-[1px] sm:border-[2px] border-whiteGreen-50 rounded-full"></div>
                <div className="m-auto py-8 grid justify-items-center gap-3 h4 font-semibold text-whiteGreen-50">
                    <button>Contáctanos</button>
                    <button>Servicios</button>
                    <button>Información</button>
                </div>
                <div className="mx-10 flex-grow border-[1px] sm:border-[2px] border-whiteGreen-50 rounded-full"></div>
                <div className="pt-8 flex justify-center">
                    <button><FaInstagram size={30} color="#fcfefe" /></button>
                </div>
            </section>
            <section className="py-4 bg-green-600">
                <div className="mx-5 h4 font-semibold text-whiteGreen-50">Desarrollado con ❤️ por House Tech Latam © Copyright 2023</div>
            </section>
        </footer>
    )
}

export default Footer