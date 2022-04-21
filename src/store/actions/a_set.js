export function setisLoaded(value) {
	return {
		type: "SET_IS_LOADED",
		value: value
	};
}
export function setLang(value) {
	return {
		type: "SET_LANG",
		value: value
	};
}
export function setSearch(value) {
	return {
		type: "SET_SEARCH",
		value: value
	};
}
export function stopAutoPlay(value) {
	return {
		type: "STOP_AUTO_PLAY",
		value: value
	};
}
export function playPauseVideo(id, value) {
	return {
		type: "PLAY_PAUSE_VIDEO",
		value: value,
		id: id
	};
}