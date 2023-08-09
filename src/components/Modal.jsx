const Modal = ({ handleModalInfo, modalInfo }) => {

    return (
        <section className={`${modalInfo ? "left-0 " : "left-full "} transition-all duration-700 min-h-screen min-w-full flex justify-center items-center pb-6 absolute backdrop-blur-sm`}>
            <div className="min-h-full bg-slate-500 flex flex-col justify-center items-center px-4 rounded-3xl">
                <h2 className="font-lato text-gray-300 text-bold text-2xl mt-6">Tenemos un problema</h2>
                <div>
                    <img src="/image/modal/modal2.png" alt="" className="sm:w-[300px] sm:h-[300px]" />
                </div>
                <article className="text-center">
                    <p className="font-lato text-gray-300-700 font-bold text-xl">Lo sentimos, no pudimos encontrar la ciudad.</p>
                </article>
                <button type="button" className="font-lato text-white font-bold bg-gray-700 px-4 py-2 rounded-full mt-5 mb-4 sm:hover:bg-slate-300  sm:hover:text-black" onClick={handleModalInfo
                }>Cerrar ventana</button>
            </div>
        </section>
    )
}

export default Modal