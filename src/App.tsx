import { useEffect, useState } from "react"
import "./App.css"
import { WeatherData } from "./WeatherData"

export const App = () => {
  const [temperature, setTemperature] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [windDir, setWindDir] = useState(0)
  const [humidity, setHumidity] = useState(0)

  useEffect(() => {
    const url =
      "https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=pQ81oWh9Fa4k5TQwyYka7wkhSQGKVLfm"
    fetch(url)
      .then((res) => res.json())
      .then((weatherJson: WeatherData) => {
        const values = weatherJson.data.values
        setTemperature(values.temperature)
        setWindSpeed(values.windSpeed)
        setWindDir(values.windDirection)
        setHumidity(values.humidity)
      })
  }, [])

  return (
    <div className="">
      <div className="h-56 w-56 rounded-lg border bg-stone-200">
        <div className="text-sm">{temperature}</div>
        <div className="text-sm">{windSpeed}</div>
        <div className="text-sm">{windDir}</div>
        <div className="text-sm">{humidity}</div>
      </div>
    </div>
  )
}
