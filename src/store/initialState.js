const initialState = {
	set: {
		isLoaded: false,
		queryParsed: false,
		lang: "ru",
		filter: "",
		autoPlayOn: true,
		played: "stop"
	},
	menu: {
		"sortType": "id",
		"sortDirection": "tohigh",
		"view": "table"
	},
	data: [],
	langpack: {}
};

export default initialState;