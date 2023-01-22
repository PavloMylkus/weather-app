import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ICurentWeather } from "../../models";
import { WEEK_DAYS_ENG, WEEK_DAYS_UKR } from "../../const";
import { styled } from '@mui/material/styles';
import { useLocale } from "../../hooks/useLocale";
import Image from "next/image";


const CurrentWeather = ({ data }: ICurentWeather) => {

	const { t, locale } = useLocale();

	const weekLocale = locale === "uk" ? WEEK_DAYS_UKR : WEEK_DAYS_ENG;

	const currentDay = new Date(data.dt * 1000).getDay();

	const description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)

	const nameCity = `${data.name}, ${data.sys.country}`

	const CardCurrentWeather = styled(Card)(() => ({
		margin: '12px auto',
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
							{weekLocale[currentDay]}
						</Typography>
						<Typography component="div" variant="h5">
							{/* <b>{nameCity != data.city && !data.city ? nameCity : data.city}</b> */}
							<b>{nameCity === data.city || data.city === 'YourLocation' ? nameCity : data.city}</b>
						</Typography>
						<Typography variant="subtitle1" component="div">
							{description}
						</Typography>
					</CardContent>
					<Box>
						<Image
							style={{ padding: 15 }}
							src={`/action/icons/${data.weather[0].icon}.png`}
							alt={description}
							height={112}
							width={112} />

					</Box>

				</Box>
				<Box sx={{ textShadow: '0 0 5px #17243280', p: 1, pl: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography component="div" variant="h2">
						<b>{Math.round(data.main.temp)}°C</b>
					</Typography>
					<Box
						sx={{
							fontSize: '14px',
							minWidth: { xs: '180px', sm: '220px', md: '230', lg: '240px' },
							padding: '0 16px 0 32px'
						}}>
						<Typography component="p" >
							{t.current_weather.details}
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							{t.current_weather.feels_like} <b>{Math.round(data.main.feels_like)}°C</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							{t.current_weather.wind} <b>{data.wind.speed} m/s</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							{t.current_weather.humidity} <b>{data.main.humidity}%</b>
						</Typography>
						<Typography sx={{ fontSize: 'inherit', display: 'flex', justifyContent: 'space-between' }} component="p" >
							{t.current_weather.pressure} <b>{data.main.pressure}hPa</b>
						</Typography>

					</Box>
				</Box>
			</Box>
		</CardCurrentWeather >
	)
};

export default CurrentWeather;
