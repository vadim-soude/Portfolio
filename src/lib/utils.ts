type DateStyle = Intl.DateTimeFormatOptions['dateStyle']
import type { Post } from '$lib/types'

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'fr') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return formatter.format(new Date(date))
}

export function search(post:Post,searchData:string){

	if (searchData === ""){
		return true;
	}

	let rawTitle:string = simplify(post.title);
	let rawSearchData:string = simplify(searchData);

	if(rawTitle.includes(rawSearchData)){
		return true;
	}

	let isInTag:boolean = false;

	post.categories.forEach(tag=>{
		let rawTag:string = simplify(tag);
		if(rawTag.includes(rawSearchData)){
			isInTag = true;
		}
	})

	return isInTag;
}


function simplify(input:string){
	let output:string = input.toLowerCase();

	output = output.replaceAll('é','e');
	output = output.replaceAll('ê','e');
	output = output.replaceAll('è','e');
	output = output.replaceAll('à','a');
	output = output.replaceAll('ç','c');
	output = output.replaceAll('ù','u');
	output = output.replaceAll('û','u');

	return output;
}
