import React from "react"
import CurrentWeather from "../../../components/CurrentWeather"
import Forecast from "../../../components/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api/api";
import Head from "next/head";
import { useLocale } from "../../../hooks/useLocale";


export const getServerSideProps = async (context: any) => {

	const [lat, lon] = context.params.coord.split(',')

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
	const { t } = useLocale()
	return (
		<>
			<Head>
				<title>{`MyForecast | ${t.title.titleCity} ${props.currentWeather.name} `}</title>
				<meta name="description" content={`${t.title.descriptionCity.desc1} ${props.currentWeather.name}.${t.title.descriptionCity.desc2} ${t.title.descriptionHome}`} />
			</Head>
			{props.currentWeather && <CurrentWeather data={props.currentWeather} />}
			{props.forecast && <Forecast data={props.forecast} />}
		</>

	)
};

export default Coord;
