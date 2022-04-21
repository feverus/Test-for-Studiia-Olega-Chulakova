import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import HumanTable from './humanTable';
import HumanPreview from './humanPreview';
import {translit} from '../other.js'

class Table_i extends React.Component {	
	render() {
		let copy = this.props.data.slice();
		let type = this.props.menu.sortType;
		let view = this.props.menu.view;
		let f = this.props.filter.split(' ');
		if (f.length>0) {
			if (f[0]!=="") {
				f.forEach(word => {
					copy = copy.filter((item, index)=> {
						let inArray = item["name"].toUpperCase().includes(translit(word).toUpperCase());
						if ( inArray ) return item; 
					});					
				});
			}
		}
		if (type==="name") {			
			copy.sort((a, b)=>{return a[type].localeCompare(b[type], { sensitivity: 'base' })});
		} else {
			copy.sort((a, b)=>{return a[type] - b[type]});
		}
		if (this.props.menu.sortDirection === "tolow") {
			copy.reverse();
		}
		var inProp = false;
		switch (view) {
			case "table": 
			return (
				<>
					<HumanTable key={0} id={0} title={true} />
					{copy.map((item) => (<HumanTable key={item.id} id={item.id} />))}
				</>
			);	
			case "preview": 
			return (
				<>
					{copy.map((item) => (<HumanPreview key={item.id} id={item.id} />))}
				</>
			);	
		}		
	}
}


const Table = connect(mapStateToProps("Table"), mapDispatchToProps("Table"))(Table_i);
export default Table;