import React, { useState } from "react"
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Typography, LinearProgress } from "@mui/material";
import { useSearchData } from "../hooks/useSearchData";
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
			setStatus(t.home.not_browser_support);
		} else {
			setStatus(t.home.locating);
			navigator.geolocation.getCurrentPosition((position) => {
				setStatus('');
				handleOnSearch({
					value: `${position.coords.latitude} ${position.coords.longitude}`,
					label: ''
				})
			}, () => {
				setStatus(t.home.unable_to_location)
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

			{!currentWeather && !forecast && !loading && <Box
				sx={{
					color: 'gray',
					textAlign: 'center',
					marginTop: 8
				}}>
				<Button onClick={getLocation} variant="outlined" startIcon={<LocationOnIcon />}>
					{t.home.get_location}
				</Button>
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