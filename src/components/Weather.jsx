import { useState } from "react"

const Weather = ({ weatherInfo }) => {
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

    const resultTempConvertion = isCelsius ? kelvinToCelcius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)

    return (
        <section className="text-center">
            <h2 className="mb-8 text-black font-bold text-2xl">{weatherInfo?.name}</h2>

            <section className="grid gap-4 sm:grid-cols-[auto_auto]">
                {/* sección superior */}
                <section className="bg-white/50 rounded-[38px] grid grid-cols-2 items-center">
                    <h4 className="col-span-2 font-semibold text-gray-500 text-2xl">{weatherInfo?.weather[0].description}</h4>
                    <span className="text-black text-4xl">{resultTempConvertion}º{isCelsius ? "C" : "F"}</span>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt='' />
                    </div>
                </section>

                {/* sección inferior */}
                <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img1.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{weatherInfo?.wind.speed}m/s</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img3.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{weatherInfo?.main.humidity}%</span>
                    </article>

                    <article className="flex gap-2 items-center">
                        <div className="w-[18px]">
                            <img src='/image/img2.png' alt='' />
                        </div>
                        <span className="text-black font-bold">{weatherInfo?.main.pressure}hPa</span>
                    </article>
                </section>
            </section>
            <button onClick={handleChangeTemp} className="text-bold text-[#4580BA] bg-white rounded-full px-6 py-1 mt-8">Cambiar a {isCelsius ? "C" : "F"}º</button>
        </section>
    )
}

export default Weather