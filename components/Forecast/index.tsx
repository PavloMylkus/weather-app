import React, { useState } from "react"
import Box from '@mui/material/Box';
import { IForecast } from "../../models";
import Typography from '@mui/material/Typography';
import { Paper } from "@mui/material";
import ForecastForDays from "../ForecastForDays";


const Forecast = ({ data }: IForecast) => {


	const forecast = data.list.map((item) => {
		const date = item.dt_txt.split(' ')
		const dayInWeek = new Date(date[0]).getDay();

		return dayInWeek
	})
	const daysForecast = Array.from(new Set(forecast));
	console.log(daysForecast);


	const list = daysForecast.map((item, idx) => {
		return (
			<Box key={idx}>
				<ForecastForDays
					data={data.list}
					day={item} />
			</Box>

		)
	})

	return (
		<>

			<Paper elevation={3} >
				<Typography component="h3" variant="h5">
					Daily forecast
				</Typography>

				{list}


			</Paper>

		</>
	)
};

export default Forecast;
