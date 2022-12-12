
export interface ICurentWeather {
	data: {
		id?: number
		base: string
		city: string
		codі: number
		clouds: {
			all: number
		}
		coord: {
			lon: number
			lat: number
		}
		dt: number
		main: IMain
		name: string
		snow: {
			'1h': number
		}
		sys: {
			country: string
			id: number
			sunrise: number
			sunset: number
			type: number
		}
		timezone: number
		visibility: number
		weather: IWeather[]
		wind: {
			deg: number
			gust: number
			speed: number
		}
	}
}

export interface IForecast {
	data: {
		city: ICity
		cht: number
		cod: string
		list: IList[]
		message?: number
	}
}


export interface IList {
	clouds: {
		all: number
	}
	dt: number
	dt_txt: string
	main: IMain
	pop: number
	sys: {
		pod: string
	}
	visibility: number
	weather: IWeather[]
	wind: {
		deg: number
		gust: number
		speed: number
	}

}

interface IMain {
	feels_like: number
	grnd_level: number
	humidity: number
	pressure: number
	sea_level: number
	temp: number
	temp_max: number
	temp_min: number
}

interface ICity {
	coord: {
		lon: number
		lat: number
	}
	country: string
	id: number
	name: number
	population: number
	sunrise: number
	sunset: number
	timezone: number
}

interface IWeather {
	description: string
	icon: string
	id: number
	main: string
}

