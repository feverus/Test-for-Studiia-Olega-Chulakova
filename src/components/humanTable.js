import React from 'react';
import { connect } from 'react-redux';
import VisibilitySensor from "react-visibility-sensor";
import { CSSTransition } from 'react-transition-group';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Fav from './fav';

class Human_i extends React.Component {
	render() {
		let l = this.props.langPack;
		let srcImg = "studiia_olega_chulakova/images/";
		let inProp = this.props.data[this.props.id].visible;
		let ht = (this.props.id % 2 === 0)? "htl" : "htr";
		if (this.props.title===true) {
			return (
				<div className={"forVS"}>
					<div className="humantable">
						<div className="id">
							{l.id}
						</div>
						<div className="image">
							{l.photo}
						</div>
						<div className="name">
							{l.name}
						</div>
						<div className="age">
							{l.age}
						</div>
						<div className="phone">
							{l.phone}
						</div>
						<div className="favourite">
							{l.favourite}
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<VisibilitySensor
                onChange={(isVisible) => {this.props.doChangeVisible(this.props.id, isVisible)}}
				intervalDelay={10}
				partialVisibility={true}>
					<div className="forVS">
						<CSSTransition
							classNames={ht}
							key={this.props.id}
							in={inProp}
							timeout={500}						
							appear={true}
							mountOnEnter={true}
							unmountOnExit={true} >
							<div className="humantable">
								<div className="id">
									{this.props.id}
								</div>
								<div className="image">
									<img src={srcImg+this.props.data[this.props.id].image+'.svg'} alt={l.photo}></img>
								</div>
								<div className="name">
									{this.props.data[this.props.id].name}
								</div>
								<div className="age">
									{this.props.data[this.props.id].age}
								</div>
								<div className="phone">
									{this.props.data[this.props.id].phone}
								</div>
								<div className="favourite">
									<Fav id={this.props.id} 
									favourite={this.props.data[this.props.id].favourite}/>
								</div>
							</div>
						</CSSTransition>
					</div>
				</VisibilitySensor>
			)			
		}

	}
}


const HumanTable = connect(mapStateToProps("HumanTable"), mapDispatchToProps("HumanTable"))(Human_i);
export default HumanTable;