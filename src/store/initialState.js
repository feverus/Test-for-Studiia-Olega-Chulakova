const initialState = {
	set: {
		isLoaded: false,
		queryParsed: false,
		lang: "ru",
		filter: ""
	},
	menu: {
		"sortType": "id",
		"sortDirection": "toHigh",
		"view": "table"
	},
	data: [],
	langpack: {}
};

export default initialState;