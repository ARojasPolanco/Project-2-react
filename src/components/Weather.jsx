import axios from "axios"
import { useState } from "react"

const Weather = ({ changeCity, handleChangeCity }) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const kelvinToCelcius = (tempKelvin) => {
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFahrenheit = (tempKelvin) => {
        return (((tempKelvin - 273.15) * 9 / 5) + 32).toFixed(1)
    }



    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }

    const resultTempConvertion = isCelsius ? kelvinToCelcius(changeCity?.main.temp) : kelvinToFahrenheit(changeCity?.main.temp)

    return (
        <section className="text-center">

            {/* Input */}
            <form onSubmit={handleChangeCity} className='flex rounded-md overflow-hidden max-w-max mx-auto mb-6'>
                <input id="cityName" autoComplete="off" type="text" placeholder="Buscar una ciudad" className="text-black p-2" />
                <button className="bg-neutral-700 p-2">Buscar</button>
            </form>


            <h2 className="mb-8 bg-white/60 rounded-2xl text-black font-bold text-2xl">{changeCity?.name}</h2>

            <section className="grid gap-4 sm:grid-cols-[auto_auto]">
                {/* sección superior */}
                <section className="bg-white/50 rounded-[38px] grid grid-cols-2 items-center">
                    <h4 className="col-span-2 font-semibold text-black text-2xl">{changeCity?.weather[0].description}</h4>
                    <span className="text-black text-4xl">{resultTempConvertion}º{isCelsius ? "C" : "F"}</span>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${changeCity?.weather[0].icon}@4x.png`} alt='' />
                    </div>
                </section>

                {/* sección inferior */}
                <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img1.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{changeCity?.wind.speed}m/s</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img3.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{changeCity?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img2.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{changeCity?.main.pressure}hPa</span>
                    </article>
                </section>
            </section>
            <button onClick={handleChangeTemp} className="text-bold text-[#4580BA] bg-white rounded-full px-6 py-1 mt-8">Cambiar a {isCelsius ? "F" : "C"}º</button>
        </section>
    )
}

export default Weather