import React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { IList } from "../../models";

type Props = {
	day: any;
	data: IList[];
};

const ForecastForDays: React.FC<Props> = ({ data, day }) => {
	const WEEK_DAYS_ENG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

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
					<Typography component="h3" variant="h6">{WEEK_DAYS_ENG[day]}</Typography>

				</AccordionSummary>
				<AccordionDetails>
					{data.map((item, idx) => {
						if (new Date(item.dt_txt.split(' ')[0]).getDay() === day) {
							return (
								<Box key={idx + 1000}>
									<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
										<Typography >
											{item.dt_txt.split(' ')[1]}
										</Typography>
										<Typography >
											{item.weather[0].description}
										</Typography>
										<Image src={`/icons/${item.weather[0].icon}.png`} alt="" />
										<Typography >
											<b>{Math.round(item.main.temp)}°C</b>
										</Typography>
									</Box>

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
