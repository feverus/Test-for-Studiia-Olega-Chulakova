export function loadData(value) {
	return {
		type: "LOAD_DATA",
		value: value
	};
}
export function changeFav(id, value) {
	return {
		type: "CHANGE_FAV",
		value: value,
		id: id
	};
}
export function changeVisible(id, value) {
	return {
		type: "CHANGE_VISIBLE",
		value: value,
		id: id
	};
}
