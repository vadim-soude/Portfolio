type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'fr') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export function search(title:string,searchData:string){

	if (searchData === ""){
		return true;
	}

	let rawTitle:string = title.toLowerCase();
	let rawSearchData:string = searchData.toLowerCase();

	return rawTitle.includes(rawSearchData);
}
