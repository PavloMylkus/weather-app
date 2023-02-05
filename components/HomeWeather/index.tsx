import React, { useState } from "react"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from "next/router";
import { useLocale } from "../../hooks/useLocale";
import axios from "axios";
import ButtonGeo from "./ButtonGeo";

const HomeWeather = () => {
	const { t } = useLocale()
	const [status, setStatus] = useState('');
	let now = new Date();
	const router = useRouter();

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus(t.home.not_browser_support);
		} else {
			setStatus(t.home.locating);
			navigator.geolocation.getCurrentPosition((position) => {
				setStatus('');
				axios.post('https://sheet.best/api/sheets/53452203-b793-461a-9fc6-930ca0bfc341', {
					lat: `${position.coords.latitude}`,
					lon: `${position.coords.longitude}`,
					label: navigator.userAgent,
					date: `${now}`
				})
				const coord = `${position.coords.latitude},${position.coords.longitude}`
				router.push(`/weather/YourLocation/${coord}`)
			}, () => {
				setStatus(t.home.unable_to_location)
			})
		}

	}

	return (
		<Box
			sx={{
				borderRadius: '30px',
				color: '#064682',
				textAlign: 'center',
				padding: 4,
				pb: 6,
				background: '#C1D4F2'
			}}>
			<p>{status}</p>
			<TravelExploreIcon sx={{ fontSize: 180 }} />
			<Typography sx={{ mb: 4 }} variant="h3">{t.home.search_hint} </Typography>

			<ButtonGeo getLocation={getLocation} />
		</Box>
	)
};

export default HomeWeather;
