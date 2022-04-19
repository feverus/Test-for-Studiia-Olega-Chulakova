import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

class Human_i extends React.Component {
	constructor(props) {
		super(props);
	}	
	render() {
		console.log(this.props.id);
		let src = "studiia_olega_chulakova/images/";
		return (
			<div className="humantable">
				<div className="image">
					<img src={src+this.props.data[this.props.id].image+'.svg'}></img>
				</div>				
				<div className="name">
					{this.props.data[this.props.id].name}
				</div>
				<div className="favourite">
					{this.props.data[this.props.id].favourite}
				</div>
				<div className="age">
					{this.props.data[this.props.id].age}
				</div>
				<div className="phone">
					{this.props.data[this.props.id].phone}
				</div>
				<div className="phrase">
					{this.props.data[this.props.id].phrase}
				</div>
			</div>
		);
	}
}


const HumanPreview = connect(mapStateToProps("HumanPreview"), mapDispatchToProps("HumanPreview"))(Human_i);
export default HumanPreview;