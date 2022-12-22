import React from "react"
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Typography, LinearProgress } from "@mui/material";
import { useSearchData } from "../hooks/useSearchData";

import { useLocale } from "../hooks/useLocale";


const Home = () => {
	const { t } = useLocale()
	const { handleOnSearch, forecast, currentWeather, loading } = useSearchData()

	return (
		<Box sx={{ marginTop: 8, marginBottom: 4 }}>
			<Search onSearchChange={handleOnSearch} />
			{
				loading &&
				<LinearProgress sx={{ marginTop: 1 }} color="inherit" />
			}
			{!currentWeather && !forecast && !loading && <Box sx={{ color: 'gray', textAlign: 'center', marginTop: 8 }}>
				<TravelExploreIcon sx={{ fontSize: 180 }} />
				<Typography variant="h3">{t.home.search_hint} </Typography>
			</Box>}
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</Box>
	)
}
export default Home