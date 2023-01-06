import React, { useState } from "react"
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Typography, LinearProgress } from "@mui/material";
import { useSearchData } from "../hooks/useSearchData";

import { useLocale } from "../hooks/useLocale";


const Home = () => {
	const { t } = useLocale()
	const [status, setStatus] = useState('');
	const [coord, setCoord] = useState(
		{
			label: '',
			value: ''
		}
	)
	const { handleOnSearch, forecast, currentWeather, loading } = useSearchData()


	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supportet by you browser');
		} else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition((position) => {
				setStatus('');
				setCoord(
					{
						value: `${position.coords.latitude} ${position.coords.longitude}`,
						label: 'Lviv'
					}
				)
				handleOnSearch({
					value: `${position.coords.latitude} ${position.coords.longitude}`,
					label: ''
				})
			}, () => {
				setStatus('Unable to retrive your location ')
			})
		}

	}

	return (
		<Box sx={{ marginTop: 8, marginBottom: 4 }}>
			<Search handleOnSearch={handleOnSearch} />
			{
				loading &&
				<LinearProgress sx={{ marginTop: 1 }} color="inherit" />
			}

			{!currentWeather && !forecast && !loading && <Box sx={{ color: 'gray', textAlign: 'center', marginTop: 8 }}>
				<button onClick={getLocation}>Get Location</button>
				<p>{status}</p>
				{/* {coord && <p>Latitude: {coord}</p>} */}
				<TravelExploreIcon sx={{ fontSize: 180 }} />
				<Typography variant="h3">{t.home.search_hint} </Typography>
			</Box>}
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</Box>
	)
}
export default Home