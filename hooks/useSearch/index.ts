import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../pages/api/api.js";

export interface ISearchData {
	label: string
	value: string
}

export const useSearch = () => {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecast, setForecast] = useState(null)
	const [loading, setLoading] = useState(false)


	const handleOnSearch = (searchData: ISearchData) => {
		const [lat, lon] = searchData.value.split(" ");
		setLoading(true)
		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
		const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse })
				setLoading(false)
			})
			.catch((err) => console.log(err))

	}
	return {
		handleOnSearch,
		currentWeather,
		forecast,
		loading
	}
}