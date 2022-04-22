import React from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg'
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

class Fav_i extends React.Component {	
	render() {
		let st = (this.props.favourite)?"":" checked";
		return (
			<button onClick={() => this.props.doChangeFav(this.props.id, this.props.favourite)}>
				<ReactSVG className={"star"+st} src="icons/star.svg" />
			</button>
		);
	}
}


const Fav = connect(mapStateToProps("Fav"), mapDispatchToProps("Fav"))(Fav_i);
export default Fav;