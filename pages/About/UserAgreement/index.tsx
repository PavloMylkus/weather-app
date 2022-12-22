import { Box, Paper, Typography } from "@mui/material";
import React from "react"
import { styled } from '@mui/material/styles';
import { useLocale } from "../../../hooks/useLocale";


const UserAgreement = () => {
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
		<Box sx={{ marginTop: 12 }}>
			<Paper sx={{ padding: 2 }}>
				<BoxContainer>
					<Typography component='h1' variant="h4">{t.user_agreement.title1}</Typography>
					<Typography component='h2' variant="h6">{t.user_agreement.subtitle1}</Typography>
					<Typography>
						{t.user_agreement.terms}
					</Typography>
				</BoxContainer>
				<BoxContainer >
					<Typography component='h3' variant="h6">
						{t.user_agreement.subtitle2}
					</Typography>
					<Typography>
						{t.user_agreement.privacy_policy}
					</Typography>
					<ul>
						<li>{t.user_agreement.li1}</li>
						<li>{t.user_agreement.li2}</li>
						<li>{t.user_agreement.li3}</li>
					</ul>
					<Typography>
						{t.user_agreement.description}
						<Links href="http://www.google.com/analytics/terms/ru.html">http://www.google.com/analytics/terms/ru.html</Links>
					</Typography>
				</BoxContainer>
			</Paper>

		</Box>
	)
};

export default UserAgreement;