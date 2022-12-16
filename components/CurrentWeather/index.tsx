import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ICurentWeather } from "../../models";
import { WEEK_DAYS_ENG } from "../../const";
import { styled } from '@mui/material/styles';


const CurrentWeather = ({ data }: ICurentWeather) => {
	const currentDay = new Date(data.dt * 1000).getDay()
	const description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)

	const CardCurrentWeather = styled(Card)(() => ({
		margin: '20px auto',
		backgroundColor: '#3e3e3e',
		backgroundImage: `url(/action/backgrounds/${data.weather[0].main}.jpg)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: "white",
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	}));

	return (
		<CardCurrentWeather>
			<Box sx={{ backdropFilter: 'blur(4px)' }}>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
					<CardContent sx={{
						flex: '1 0 auto'
					}}>
						<Typography component="span" variant="subtitle1">
							{WEEK_DAYS_ENG[currentDay]}
						</Typography>
						<Typography component="div" variant="h5">
							<b>{data.city}</b>
						</Typography>
						<Typography variant="subtitle1" component="div">
							{description}
						</Typography>
					</CardContent>
					<Box>
						<CardMedia
							component="img"
							sx={{ width: '100%', padding: 2 }}
							image={`/action/icons/${data.weather[0].icon}.png`}
							alt="weather"
						/>
					</Box>

				</Box>
				<Box sx={{ textShadow: '0 0 5px #17243280', p: 1, pl: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography component="div" variant="h2">
						<b>{Math.round(data.main.temp)}°C</b>
					</Typography>
					<Box
						sx={{
							fontSize: '12px',
							minWidth: { xs: '180px', sm: '220px', md: '230', lg: '240px' },
							padding: '0 16px 0 32px'
						}}>
						<Typography component="p" >
							Details
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							Feels like <b>{Math.round(data.main.feels_like)}°C</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							Wind <b>{data.wind.speed} m/s</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							Humidity <b>{data.main.humidity}%</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							Pressure <b>{data.main.pressure}hPa</b>
						</Typography>

					</Box>
				</Box>
			</Box>
		</CardCurrentWeather >
	)
};

export default CurrentWeather;
