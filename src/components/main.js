import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, SwitchTransition } from 'react-transition-group';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Menu from './menu';
import Table from './table';

class Main_i extends React.Component {
	langPackLoad = (lang) => {
		console.log('langpack load');
		fetch("langpack.json", { cache: "no-store" })
		.then(result => result.json())
		.then((result) => {
			this.props.doLoadLangPack(result, lang);
			this.props.doSetisLoaded(true);		
		})
	}	
	firstLoad = () => {
		console.log('first load');		
		fetch("studiia_olega_chulakova/data.json", { cache: "no-store" })
		.then(result => result.json())
		.then((result) => {
			result.forEach((item) => (item["visible"] = false));
			result.forEach((item) => (item["played"] = false));
			this.props.doLoadData(result);				
			this.langPackLoad("ru");		
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
		
		let sortType = (at.indexOf(query.get("sortType")) !== -1) ? query.get("sortType") : menu.sortType;
		let sortDirection = (ad.indexOf(query.get("sortDirection")) !== -1) ? query.get("sortDirection") : menu.sortDirection;
		let view = (av.indexOf(query.get("view")) !== -1) ? query.get("view") : menu.view;
		let lang = (al.indexOf(query.get("lang")) !== -1) ? query.get("lang") : "ru";
				
		this.props.doChangeAll(sortType, sortDirection, view, lang);
	}
	componentDidMount() {
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
					<TransitionGroup className="list">				
						<Table />
					</TransitionGroup>
				</>
			)
		}	
	}
}


const Main = connect(mapStateToProps("Main"), mapDispatchToProps("Main"))(Main_i);
export default Main;