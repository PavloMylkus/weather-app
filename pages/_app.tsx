import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from "next/head";



const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Head>
				<meta charSet='UTF-8' />
				<meta name="keywords" content="погода на тиждень, погода сьогодні, погода завтра, погода на 3 дні, погода на вихідні, погода, погода Львів, прогноз погоди, прогноз на 5 днів, weather, forecast, myweather, myforecast" />
				<meta name="author" content="Mylkus Pavlo" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="google-site-verification" content="5ACN9xiVpBOdb-YCxkg98SNLp1wvLFqogqYv3Mw6DIs" />
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	)
}
export default App;
