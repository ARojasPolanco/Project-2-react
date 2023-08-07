const Loader = () => {
    return (
        <section className="bg-[#373839] min-h-screen min-w-full fixed font-lato flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <img src="/image/loader/img01.png" alt="Weather icon" className="animate-bounce" />
                <h1 className="text-white text-4xl font-bold">Clima App</h1>
                <section className="bg-white/80 flex justify-center px-4 p-[3px] gap-3 rounded-xl">
                    <img src="/image/loader/img1.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img2.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img3.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img4.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img5.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img6.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img7.png" alt="Weather icon" className="animate-pulse" />
                    <img src="/image/loader/img8.png" alt="Weather icon" className="animate-pulse" />
                </section>
            </div>
        </section >

    )
}

export default Loader