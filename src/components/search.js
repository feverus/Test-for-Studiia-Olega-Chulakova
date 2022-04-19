import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

class Search_i extends React.Component {
	constructor(props) {
		super(props);
	}		
	render() {
		let l = this.props.langPack;
		return (
			<input type="text" value={this.props.filter} onChange={(event)=>this.props.doSetSearch(event.target.value)} />
		)
	}
}


const Search = connect(mapStateToProps("Search"), mapDispatchToProps("Search"))(Search_i);
export default Search;