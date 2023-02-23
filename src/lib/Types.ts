export type errorHandling = {
	error: boolean;
	message: string;
};
export type DoujindesuLatest = {
	title: string;
	chapter: string;
	thumbnail: string;
	url: string | any;
	tags: any | string;
}[];
export type DoujindesuSearch = {
	title: string;
	type: string;
	status: string;
	score: string;
	thumbnail: string;
	url: string;
	tags: any | string;
}[];
export type DoujindesuDetail = {
	title: string;
	titles: string;
	thumbnail: string;
	metadata?: {};
	links: {
		title: string;
		url: string;
	}[];
};
