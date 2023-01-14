import React, { useState } from "react"
import { GEO_API_URL, geoApiOptions } from "../../pages/api/api";
import { useRouter } from "next/router";


export const useSearch = () => {
	const [search, setSearch] = useState(null);
	const router = useRouter();
	const { locale } = router;
	const loc = locale === 'en' ? 'en' : 'ru';

	const loadOptions = (inputValue: string) => {

		return new Promise<any>((resolve) => {
			setTimeout(() => {
				const response = fetch(
					`${GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}&languageCode=${loc}`,
					geoApiOptions)
					.then(response => response.json())
					.then(response => {
						return {
							options: response.data.map((city: any) => {
								return {
									value: `${city.latitude} ${city.longitude}`,
									label: `${city.name}, ${city.countryCode}`
								}
							})
						}
					})

				resolve(response);

			}, 700);
		});
	};



	const handleOnChange = (searchData: any) => {

		setSearch(searchData);
		const city = searchData.label.split(',')[0].split(' ').join('-')
		const coord = searchData.value.split(' ').join(',')
		router.push(`/weather/${city}/${coord}`)
	}
	return {
		handleOnChange,
		loadOptions,
		search,
	}
}