import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { minWidth } from "@mui/system";



const CurrentWeather = ({ data }: any) => {
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
						Rava-Ruska, UA
					</Typography>
					<Typography variant="subtitle1" component="div">
						Sunny
					</Typography>
				</CardContent>
				<Box>
					<CardMedia
						component="img"
						sx={{ width: '100% ' }}
						image="/icons/01d.png"
						alt="Live from space album cover"
					/>
				</Box>

			</Box>
			<Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pb: 1 }}>
				<Typography component="div" variant="h2">
					18°C
				</Typography>
				<Box sx={{ fontSize: '12px', width: '100%', padding: '0 16px 0 32px' }}>
					<Typography component="p" >
						Details
					</Typography>
					<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
						Feels like <b>22°C</b>
					</Typography>
					<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
						Wind <b>2 m/s</b>
					</Typography>
					<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
						Humidity <b>15%</b>
					</Typography>
					<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
						Pressure <b>15hPa</b>
					</Typography>

				</Box>
			</Box>
		</Card >
	)
};

export default CurrentWeather;
