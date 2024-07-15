import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, year, model, limit, fuel } = filters;

	const headers = {
		'x-rapidapi-key': '541ee9bbbdmshe44f2f5067ff118p18e848jsnf0be3ad4badb',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
		{
			headers: headers,
		}
	);

	const result = await response.json();

	return result;
}

export const calculateCarRent = (cityMpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.5;

	// Calculate additional rate based on milaeg and age
	const mileageRate = cityMpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const totalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return totalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	// key ...
	const url = new URL('https://cdn.imagin.studio/getimage');
	const { make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelyear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(type, value);

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

	return newPathname;
};
