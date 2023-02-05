import React from "react"
import Head from "next/head";
import { Box } from "@mui/material";
import { useLocale } from "../hooks/useLocale";
import Script from 'next/script'
import HomeWeather from "../components/HomeWeather";

const Home = () => {
	const { t } = useLocale()

	return (
		<>
			<Head>
				<title>{t.title.titleHome}</title>
				<meta name="description" content={t.title.descriptionHome} key="desc" />
				<meta property="og:title" content={t.title.titleHome} />
				<meta
					property="og:description"
					content={t.title.descriptionHome}
				/>
				<meta
					property="og:image"
					content="/action/tittle-icon.png"
				/>
			</Head>

			<Script
				id="Adsense-id"
				data-ad-client="ca-pub-8227519649275749"
				async={true}
				strategy="beforeInteractive"
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
			/>
			<Box sx={{ marginTop: 2, marginBottom: 4, }}>
				<HomeWeather />
			</Box>
		</>

	)
}
export default Home