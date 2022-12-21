import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';


const About = () => {

	const Links = styled('a')(() => ({
		color: 'blue'
	}));
	const BoxContainer = styled(Box)(() => ({
		'&:nth-of-type(n+2)': {
			marginTop: 16
		}
	}));

	return (
		<Box sx={{ marginTop: 12 }}>
			<Paper sx={{ padding: 2 }}>
				<BoxContainer>
					<Typography component='h1' variant="h4">User Agreement and Privacy Policy</Typography>
					<Typography component='h2' variant="h6">Terms</Typography>
					<Typography>
						The "MyForecast" site provides the User with free access to the following weather data:
						air temperature, cloudiness, amount of precipitation, atmospheric pressure, atmospheric humidity,
						wind strength and direction, dew point, dangerous meteorological phenomena, etc.
						Meteorological information on the site is data of mathematical weather forecasting models without their
						processing by a forecaster. The data posted on the "MyForecast" website is intended exclusively for
						non-commercial use. It is forbidden to use the information for commercial purposes, as well as for making
						decisions related to possible material losses and risk. This User Agreement may be changed without any notice to
						site users. The new edition of the Agreement comes into force from the moment of its publication. The use of the "MyForecast" site by the User means that the User is
						considered to have accepted this Agreement in its entirety, without any exceptions. If the User does not
						agree with any provision of this Agreement, the User must stop using the site.
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						Privacy Policy
					</Typography>
					<Typography>
						We treat the User's personal data with great respect and do not collect any information that is subject to legal restrictions.
						When using the MyForecast website, the following data is collected and processed:
					</Typography>
					<ul>
						<li>IP addresses;</li>
						<li>cookie files;</li>
						<li>parameters and settings of Internet browsers.</li>
					</ul>
					<Typography>
						Google Analytics codes are additionally installed on the site.
						The use of this service is necessary for the operational analysis of the attendance and activity of the
						Site Users. We also post links to the privacy policies of these services.
						Google Analytics privacy policy: <Links href="http://www.google.com/analytics/terms/ru.html">http://www.google.com/analytics/terms/ru.html</Links>
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default About;