import React, { useState, HTMLInputTypeAttribute } from "react"
import { AsyncPaginate } from "react-select-async-paginate";
import { OptionalTypeNode } from "typescript";
import { GEO_API_URL, geoApiOptions } from "../../pages/api/api";


const Search = ({ onSearchChange }: any) => {
	const [search, setSearch] = useState(null)


	const loadOptions = (inputValue: string) => {

		const response = fetch(
			`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
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
			.catch(err => console.error(err));
		return response;
	}

	const handleOnChange = (searchData: any) => {
		setSearch(searchData);
		onSearchChange(searchData)
	}

	return (
		<AsyncPaginate
			id="postType"
			instanceId="long-value-select"
			placeholder="Search for city"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	)
};

export default Search;
