export function changeSortType(vType, vDirection) {
	return {
		type: "CHANGE_SORT_TYPE",
		vType: vType,
		vDirection: vDirection
	};
}
export function changeSortDirection(vType, vDirection) {
	return {
		type: "CHANGE_SORT_DIRECTION",
		vType: vType,
		vDirection: vDirection
	};
}
export function changeView(value) {
	return {
		type: "CHANGE_VIEW",
		value: value
	};
}

export function changeAll(sortType, sortDirection, view, lang) {
	return {
		type: "CHANGE_ALL",
		sortType: sortType,
		sortDirection: sortDirection,
		view: view,
		lang: lang
	};
}