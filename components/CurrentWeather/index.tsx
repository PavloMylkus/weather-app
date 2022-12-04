import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ICurentWeather } from "../../models";



const CurrentWeather = ({ data }: ICurentWeather) => {

	const description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)

	return (
		<Card sx={{
			margin: '20px auto',
			background: '#333',
			color: "white",
			maxWidth: 400,
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column'
		}}>

			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}>
				<CardContent sx={{
					flex: '1 0 auto'
				}}>
					<Typography component="div" variant="h6">
						{data.city}
					</Typography>
					<Typography variant="subtitle1" component="div">
						{description}
					</Typography>
				</CardContent>
				<Box>
					<CardMedia
						component="img"
						sx={{ width: '100% ' }}
						image={`/icons/${data.weather[0].icon}.png`}
						alt="Live from space album cover"
					/>
				</Box>

			</Box>
			<Box sx={{ p: 1, pl: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography component="div" variant="h2">
					{Math.round(data.main.temp)}°C
				</Typography>
				<Box sx={{ fontSize: '12px', width: '100%', padding: '0 16px 0 32px' }}>
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
		</Card >
	)
};

export default CurrentWeather;
