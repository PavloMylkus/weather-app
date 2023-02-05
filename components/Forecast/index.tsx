import React from "react"
import Box from '@mui/material/Box';
import { IForecast } from "../../models";
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import ForecastForDays from "../ForecastForDays";
import { useLocale } from "../../hooks/useLocale";


const Forecast = ({ data }: IForecast) => {
	const { t } = useLocale()

	const dateOfDaysForecast = data.list.map((item) => {
		return item.dt_txt.split(' ')[0]
	})
	const daysForecastDate = Array.from(new Set(dateOfDaysForecast));

	const list = daysForecastDate.map((item, idx) => {
		const day = new Date(item).getDay()
		return (
			<Box key={idx}>
				<ForecastForDays
					daysForecastDate={item}
					data={data.list}
					day={day} />
			</Box >
		)
	})

	return (
		<>
			<Paper elevation={3} >
				<Typography sx={{ padding: 2, borderBottom: '1px solid grey' }} component="h3" variant="h5">
					{t.forecast.title}
				</Typography>
				{list}
			</Paper>
		</>
	)
};

export default Forecast;