import React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { IList } from "../../models";
import Grid from '@mui/material/Grid';
import { WEEK_DAYS_ENG, WEEK_DAYS_UKR } from "../../const";
import Tooltip from '@mui/material/Tooltip';
import { useLocale } from "../../hooks/useLocale";

type Props = {
	day: any;
	data: IList[];
};

const ForecastForDays: React.FC<Props> = ({ data, day }) => {
	const { t, locale } = useLocale()
	const weekLocale = locale === "uk" ? WEEK_DAYS_UKR : WEEK_DAYS_ENG;

	const Image = styled('img')(() => ({
		maxWidth: '50px'
	}));

	return (
		<>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id='f'
				>
					<Typography component="h3" variant="h6">{weekLocale[day]}</Typography>

				</AccordionSummary>
				<AccordionDetails>
					{data.map((item, idx) => {
						const description = item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)
						if (new Date(item.dt_txt.split(' ')[0]).getDay() === day) {
							return (

								<Box
									key={idx + 1000}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',

									}}>
									<Grid sx={{ alignItems: 'center' }} container spacing={3}>
										<Grid item xs>
											{/* time */}
											<Typography >
												{item.dt_txt.split(' ')[1].slice(0, -3)}
											</Typography>
										</Grid>
										<Grid item xs>
											<Typography >
												{description}
											</Typography>
										</Grid>
										<Grid item xs>
											<Image src={`/action/icons/${item.weather[0].icon}.png`} alt="weather" />
										</Grid>
										<Grid item xs>
											<Tooltip
												title={`Feels like ${Math.round(item.main.feels_like)}??C `}
												arrow
												placement="top-start"
												sx={{ cursor: 'pointer' }}>
												<Typography >
													<b>{Math.round(item.main.temp)}??C</b>
												</Typography>
											</Tooltip>
										</Grid>
										<Grid item xs>
											<Typography >
												{t.forecast.wind}  <b>{item.wind.speed} m/s</b>
											</Typography>
										</Grid>
									</Grid>




								</Box>



							)
						} else undefined
					})}

				</AccordionDetails>
			</Accordion>
		</>
	)
};

export default ForecastForDays;
