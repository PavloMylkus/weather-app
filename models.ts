export interface ICurentWeather {
	data: {
		id?: number
		base: string
		city: string
		codі: number
		clouds?: {
			all: number
		}
		coord?: {
			lon: number
			lat: number
		}
		dt?: number
		main: {
			feels_like: number
			grnd_level: number
			humidity: number
			pressure: number
			sea_level: number
			temp: number
			temp_max: number
			temp_min: number
		}
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
		weather: IWeather
		wind: {
			deg: number
			gust: number
			speed: number
		}
	}
}

interface IWeather {
	[index: number]: {
		description: string
		icon: string
		id: number
		main: string
	}

}