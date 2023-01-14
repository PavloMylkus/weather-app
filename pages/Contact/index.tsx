import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';
import Link from "next/link";
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
				<title>{t.title.titleContact}</title>
				<meta name="description" content={t.title.descriptionContact} />
			</Head>
			<Paper sx={{ padding: 2 }}>
				<BoxContainer>
					<Typography component='h1' variant="h5">{t.contact.title}</Typography>
					<Typography>
						{t.contact.description.before}
						<Links href="mailto: ppavlo82@gmail.com">ppavlo82@gmail.com</Links>
						{t.contact.description.after}
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						{t.contact.accept} [ <i><b><Link href='About/UserAgreement'>{t.contact.link}</Link></b></i> ]
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default About;