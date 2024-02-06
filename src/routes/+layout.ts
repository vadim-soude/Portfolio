export const prerender = true

// @ts-ignore
export async function load({ url }) {
	return {
		url: url.pathname
	}
}
