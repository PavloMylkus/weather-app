import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate";
import { useLocale } from "../../hooks/useLocale";
import { useSearch } from "../../hooks/useSearch";

const Search = ({ onSearchChange }: any) => {
	const { t } = useLocale()
	const { search, handleOnChange, loadOptions } = useSearch(onSearchChange)



	return (
		<AsyncPaginate
			id="postType"
			instanceId="long-value-select"
			placeholder={t.home.search_placeholder}
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	)
};

export default Search;
