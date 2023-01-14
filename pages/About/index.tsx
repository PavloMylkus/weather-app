import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';
import { useLocale } from "../../hooks/useLocale";
import Head from "next/head";

const About = () => {
	const { t } = useLocale()
	const Links = styled('a')(() => ({
		color: 'blue'
	}));
	const BoxContainer = styled(Box)(() => ({
		'&:nth-of-type(n+2)': {
			marginTop: 16
		}
	}));

	return (
		<Box sx={{ marginTop: 3 }}>
			<Head>
				<title>{t.title.titleAbout}</title>
				<meta name="description" content={t.title.descriptionAbout} />
			</Head>
			<Paper sx={{ padding: 2 }}>
				<BoxContainer>
					<Typography component='h1' variant="h6">{t.about.title1}</Typography>
					<Typography>
						{t.about.description1.before}
						<Links href="mailto: ppavlo82@gmail.com">ppavlo82@gmail.com</Links>
						{t.about.description1.after}
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						{t.about.title2}
					</Typography>
					<Typography>
						{t.about.description2.before}
						<Links href="https://openweathermap.org/">https://openweathermap.org/</Links><br />
						{t.about.description2.after}
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						{t.about.title3}
					</Typography>
					<Typography>
						{t.about.description3}
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default About;