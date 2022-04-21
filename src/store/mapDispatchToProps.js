import { bindActionCreators } from 'redux';
import * as set from './actions/a_set';
import * as data from './actions/a_data';
import * as menu from './actions/a_menu';
import * as langpack from './actions/a_langpack';

function mapDispatchToProps(component) {
	switch (component) {
		case "Main": return function (dispatch) {
			return {
				doSetisLoaded: bindActionCreators(set.setisLoaded, dispatch),
				doSetLang: bindActionCreators(set.setLang, dispatch),
				doLoadData: bindActionCreators(data.loadData, dispatch),
				doLoadLangPack: bindActionCreators(langpack.LoadLangPack, dispatch),
				doChangeAll: bindActionCreators(menu.changeAll, dispatch)
			};
		};
		case "Fav": return function (dispatch) {
			return {
				doChangeFav: bindActionCreators(data.changeFav, dispatch)
			};
		};
		case "HumanTable": 
		case "HumanPreview": return function (dispatch) {
			return {
				doChangeVisible: bindActionCreators(data.changeVisible, dispatch)
			};
		};
		case "Search": return function (dispatch) {
			return {
				doSetSearch: bindActionCreators(set.setSearch, dispatch)
			};
		};
		case "Menu":
		return function (dispatch) {
			return {
				doChangeSortType: bindActionCreators(menu.changeSortType, dispatch),
				doChangeSortDirection: bindActionCreators(menu.changeSortDirection, dispatch),
				doChangeView: bindActionCreators(menu.changeView, dispatch),
				doSetLang: bindActionCreators(set.setLang, dispatch)
			};
		};
		case "VideoPlayer": return function (dispatch) {
			return {
				doStopAutoPlay: bindActionCreators(set.stopAutoPlay, dispatch),
				doPlayPauseVideo: bindActionCreators(set.playPauseVideo, dispatch)
			};
		};
		
		default: return undefined;
	}
}

export default mapDispatchToProps;