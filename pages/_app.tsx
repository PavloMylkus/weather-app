import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from "next/head";
import Script from 'next/script'


const App = ({ Component, pageProps }: AppProps) => {
	return (<>
		<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QMYG97KQ9E" />
		<Script
			id='google-analytics'
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
	          window.dataLayer = window.dataLayer || [];
	          function gtag(){dataLayer.push(arguments);}
	          gtag('js', new Date());
	          gtag('config', 'G-QMYG97KQ9E', {
	            page_path: window.location.pathname,
          });
        `,
			}}
		/>
		<Layout>
			<Head>
				<meta charSet='UTF-8' />
				<meta name="keywords" content="погода на тиждень, погода сьогодні, погода завтра, погода на 3 дні, погода на вихідні, погода, погода Львів, прогноз погоди, прогноз на 5 днів, weather, forecast, myweather, myforecast" />
				<meta name="author" content="Mylkus Pavlo" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="apple-touch-icon" href="/action/tittle-icon.png"
				/>
				<meta name="google-site-verification" content="5ACN9xiVpBOdb-YCxkg98SNLp1wvLFqogqYv3Mw6DIs" />

			</Head>

			<main>
				<Component {...pageProps} />
			</main>
		</Layout>
	</>

	)
}
export default App;
