import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';
import Link from "next/link";


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
					<Typography component='h1' variant="h6">Contact us</Typography>
					<Typography>
						Write your wishes regarding the functionality of the site to the developer's mail <Links href="mailto: ppavlo82@gmail.com">ppavlo82@gmail.com</Links>,
						we will be glad to hear your opinion.
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						By using this site, you accept the [ <i><b><Link href='About/UserAgreement'>User agreement...</Link></b></i> ]
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default About;