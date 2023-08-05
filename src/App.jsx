import { Suspense, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWhatherInfo] = useState(null)
  const [city, setCity] = useState(null)

  const imagesWeather = {
    "11d": "bg-[url(/image/bg-images/bg-5.jpg)]",
    "09d": "bg-[url(/image/bg-images/bg-9.jpg)]",
    "09n": "bg-[url(/image/bg-images/bg-rain-n.jpg)]",
    "10d": "bg-[url(/image/bg-images/bg-2.jpg)]",
    "10n": "bg-[url(/image/bg-images/bg-rain-n.jpg)]",
    "13d": "bg-[url(/image/bg-images/bg-7.jpg)]",
    "50d": "bg-[url(/image/bg-images/bg-8.jpg)]",
    "01d": "bg-[url(/image/bg-images/bg-1.jpg)]",
    "02d": "bg-[url(/image/bg-images/bg-3.jpg)]",
    "03d": "bg-[url(/image/bg-images/bg-3.jpg)]",
    "04d": "bg-[url(/image/bg-images/bg-6.jpg)]",
    "01n": "bg-[url(/image/bg-images/bg-10-n.jpg)]",
    "02n": "bg-[url(/image/bg-images/bg-11-n.jpg)]",
    "03n": "bg-[url(/image/bg-images/bg-11-n.jpg)]",
    "04n": "bg-[url(/image/bg-images/bg-12-n.jpeg)]"
  }

  const changeCity = city === null ? weatherInfo : city

  const success = (pos) => {
    const lat = pos.coords.latitude
    const long = pos.coords.longitude
    console.log({ lat, long })

    const API_KEY = "4632fa64d5e084b683ade850c15b9a07"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`

    axios.get(url)
      .then(({ data }) => setWhatherInfo(data))
      .catch((err) => console.log(err))
  }

  const handleChangeCity = (e) => {
    e.preventDefault()

    const cityName = e.target.cityName.value

    const API_KEY = "4632fa64d5e084b683ade850c15b9a07"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

    axios.get(url)
      .then(({ data }) => setCity(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className={`bg-gray-700 text-white min-h-screen font-lato flex justify-center items-center px-4 ${imagesWeather[changeCity?.weather[0].icon]} bg-center bg-cover bg-no-repeat`}>
      <Weather changeCity={changeCity} handleChangeCity={handleChangeCity} />
    </main >
  )
}

export default App
