import React from "react"
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography } from "@mui/material";
import { relative } from "node:path/win32";


const Footer = () => {

	const FooterContainer = styled('footer')(() => ({
		width: '100%',
		position: 'relative',
		bottom: 0,
		padding: 10,
		background: 'grey',
		textAlign: 'center'
	}));
	const Links = styled('a')(() => ({
		color: 'blue'
	}));
	return (
		<FooterContainer>
			<Box>
				<Typography>
					Create by <Links href="https://pm-links.w3spaces.com/">
						@pavlmylkus
					</Links>
				</Typography>
				<Typography >
					API <Links href="https://openweathermap.org/api">
						OpenWeather
					</Links>
				</Typography>
			</Box>
		</FooterContainer>
	)
};

export default Footer;
