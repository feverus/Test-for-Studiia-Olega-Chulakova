import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

class Fav_i extends React.Component {
	constructor(props) {
		super(props);
	}	
	render() {
		let star = "🤍";
		switch (this.props.favourite) {
			case true: 
				star = "🖤";		
		}
		return (
			<button onClick={() => this.props.doChangeFav(this.props.id, this.props.favourite)}>{star}</button>
		);
	}
}


const Fav = connect(mapStateToProps("Fav"), mapDispatchToProps("Fav"))(Fav_i);
export default Fav;