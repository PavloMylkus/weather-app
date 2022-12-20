import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';


const About = () => {

	const Links = styled('a')(() => ({
		color: 'blue'
	}));
	const BoxContainer = styled(Box)(() => ({
		'&:nth-child(n+2)': {
			marginTop: 16
		}
	}));

	return (
		<Box sx={{ marginTop: 9 }}>
			<Paper sx={{ padding: 2 }}>
				<BoxContainer>
					<Typography component='h1' variant="h6">About the MyForecast site</Typography>
					<Typography>
						MyForecast is a forecast that we use ourselves.
						This is an attempt to make the most up-to-date and detailed weather forecast that would be convenient for users of all devices.
						And supplement it with statistical data on the climate of cities and countries, water temperature,
						tourist seasons for convenience in travel. Send all wishes and comments regarding the website to <Links href="mailto: ppavlo82@gmail.com">ppavlo82@gmail.com</Links>,
						we will be glad to hear your opinion.
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						Where do we get our weather data from?
					</Typography>
					<Typography>
						Forecasts are based on data from <Links href="https://openweathermap.org/">https://openweathermap.org/</Links><br />
						Forecasts are updated every hour.
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						Advertising on the MyForecast website
					</Typography>
					<Typography>
						Currently, advertising on the MyForecast website is placed only through the Google Ads system.
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default About;