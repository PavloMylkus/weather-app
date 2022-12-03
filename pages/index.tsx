import React, { useState } from "react"
import CurrentWeather from "../components/CurrentWeather";
import Search from "../components/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api/api";

export interface ISearchData {
	label: string
	value: string
}

const Home = () => {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecast, setForecast] = useState(null)


	const handleOnSearch = (searchData: ISearchData) => {
		const [lat, lon] = searchData.value.split(" ");

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
		const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse })
			})
			.catch((err) => console.log(err))

	}
	console.log(currentWeather);
	console.log(forecast);


	return (
		<>
			<Search onSearchChange={handleOnSearch} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
		</>
	)
}
export default Home