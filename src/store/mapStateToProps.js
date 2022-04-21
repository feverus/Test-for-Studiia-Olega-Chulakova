function mapStateToProps(component) {
	switch (component) {
		case "Main": {
			return function (state) {
				return {
					menu: state.menu,
					set: state.set,
					langPack: state.langpack[state.set.lang],
					data: state.data,
					queryParsed: state.set.queryParsed
				};
			}
		}
		case "Menu": {
			return function (state) {
				return {
					menu: state.menu,
					lang: state.set.lang,
					langPack: state.langpack[state.set.lang],
				};
			}
		}
		case "Search": {
			return function (state) {
				return {
					langPack: state.langpack[state.set.lang],
				};
			}
		}
		case "Table": {
			return function (state) {
				return {
					menu: state.menu,
					data: state.data,
					filter: state.set.filter
				};
			}
		}
		case "HumanTable": 
		case "HumanPreview": {
			return function (state) {
				return {
					data: state.data,
					langPack: state.langpack[state.set.lang]
				};
			}
		}
		case "VideoPlayer": {
			return function (state) {
				return {
					data: state.data,
					autoPlayOn: state.set.autoPlayOn,
					played: state.set.played
				};
			}
		}
		
		default: return undefined;
	}
}

export default mapStateToProps;