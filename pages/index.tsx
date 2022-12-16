import React, { useState } from "react"
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api/api";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Typography, LinearProgress } from "@mui/material";

export interface ISearchData {
	label: string
	value: string
}

const Home = () => {
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

	return (
		<>
			<Search onSearchChange={handleOnSearch} />
			{
				loading &&
				<LinearProgress sx={{ marginTop: 1 }} color="inherit" />
			}
			{!currentWeather && !forecast && !loading && <Box sx={{ color: 'gray', textAlign: 'center', marginTop: 8 }}>
				<TravelExploreIcon sx={{ fontSize: 180 }} />
				<Typography variant="h3">Search your city</Typography>
			</Box>}
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</>
	)
}
export default Home