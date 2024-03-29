import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../pages/api/api.js";
import { useRouter } from "next/router";

export interface ISearchData {
	label: string
	value: string
}

export const useSearchData = () => {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecast, setForecast] = useState(null)
	const [loading, setLoading] = useState(false)
	const router = useRouter();
	const { locale } = router;

	const handleOnSearch = (searchData: ISearchData) => {

		const [lat, lon] = searchData.value.split(" ");

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=${locale}&appid=${WEATHER_API_KEY}&units=metric`)
		const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=${locale}&appid=${WEATHER_API_KEY}&units=metric`)

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				setLoading(true)
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