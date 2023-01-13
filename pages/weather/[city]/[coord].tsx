import React from "react"
import CurrentWeather from "../../../components/CurrentWeather"
import Forecast from "../../../components/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api/api";

export const getServerSideProps = async (context: any) => {

	const [lat, lon] = context.params.coord.split(',')

	let weather = {}
	const currentWeatherFetch = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=${context.locale}&appid=${WEATHER_API_KEY}&units=metric`);
	const forecastFetch = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=${context.locale}&appid=${WEATHER_API_KEY}&units=metric`)


	const dataCurrent = await currentWeatherFetch.json();
	const dataForecast = await forecastFetch.json();


	return {
		props: {
			currentWeather: {
				city: context.params.city,
				...dataCurrent
			},
			forecast: {
				city: context.params.city,
				...dataForecast
			},

		}

	}
}

const Coord = (props: any) => {
	console.log(props);

	return (
		<>
			<CurrentWeather data={props.currentWeather} />
			<Forecast data={props.forecast} />
		</>

	)
};

export default Coord;
