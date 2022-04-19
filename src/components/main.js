import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Menu from './menu';
import Table from './table';

class Main_i extends React.Component {
	firstLoad = () => {
		console.log('first load');		
		fetch("/studiia_olega_chulakova/data.json", { cache: "no-store" })
		.then(result => result.json())
		.then((result) => {
			result.forEach((item) => (item["visible"] = false));
			this.props.doLoadData(result);			
		})	
	}
	langPackLoad = (lang) => {
		console.log('langpack load');
		fetch("/langpack.json", { cache: "no-store" })
		.then(result => result.json())
		.then((result) => {
			this.props.doLoadLangPack(result, lang);
			this.props.doSetisLoaded(true);		
		})
	}
	parseQueryString = () => {
		let menu = this.props.menu;		 	
		let query = new URLSearchParams(window.location.search);
		//допустимые параметры в строке поиска, брать в menu.js
		let al = ['ru', 'en'];		
		let at = ['id', 'name', 'age'];		
		let ad = ['tohigh', 'tolow'];		
		let av = ['table', 'preview'];		
		
		let sortType = (at.indexOf(query.get("sortType")) != -1) ? query.get("sortType") : menu.sortType;
		let sortDirection = (ad.indexOf(query.get("sortDirection")) != -1) ? query.get("sortDirection") : menu.sortDirection;
		let view = (av.indexOf(query.get("view")) != -1) ? query.get("view") : menu.view;
		let lang = (al.indexOf(query.get("lang")) != -1) ? query.get("lang") : "ru";
				
		this.props.doChangeAll(sortType, sortDirection, view, lang);
	}
	componentDidMount() {
		this.langPackLoad("ru");
		this.firstLoad();	
	}
	render() {
		if (!this.props.set.isLoaded) {return (<>...</>)}
		else {
			if (this.props.queryParsed===false) {		
				this.parseQueryString();
			}			
			return (
				<>
					<Menu />
					<div className="list">
						<Table />
					</div>
				</>
			)
		}	
	}
}


const Main = connect(mapStateToProps("Main"), mapDispatchToProps("Main"))(Main_i);
export default Main;