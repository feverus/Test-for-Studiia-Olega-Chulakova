import React from 'react';
import { connect } from 'react-redux';
import VisibilitySensor from "react-visibility-sensor";
import { CSSTransition } from 'react-transition-group';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Fav from './fav';
import VideoPlayer from './videoPlayer';
import {age} from '../other.js'

class Human_i extends React.Component {
	render() {
		let l = this.props.langPack;
		let srcImg = "studiia_olega_chulakova/images/";
		let srcVideo = document.location.origin+document.location.pathname+"/studiia_olega_chulakova/videos/";
		let inProp = this.props.data[this.props.id].visible;
		let ht = (this.props.id % 2 === 0)? "htl" : "htr";
		let st = (this.props.data[this.props.id].video === undefined)? "_without_video" : "_video";
		return (
			<VisibilitySensor
			onChange={(isVisible) => {this.props.doChangeVisible(this.props.id, isVisible)}}
			intervalDelay={10}
			partialVisibility={true}>
				<div className={"forVS"+st}><CSSTransition in={inProp} timeout={1000} classNames={ht}
				appear={true} mountOnEnter={true}>
					<div className="humanpreview">
						<div className="left-block">
							<div className="image">
								<img src={srcImg+this.props.data[this.props.id].image+'.svg'} alt={l.photo}></img>
							</div>
							<div className="name">
								{this.props.data[this.props.id].name}
							</div>
							<div className="favourite">
								<Fav id={this.props.id} 
								favourite={this.props.data[this.props.id].favourite}/>
							</div>						
							<div className="age">
								{this.props.data[this.props.id].age+' '+l[age(this.props.data[this.props.id].age)]}
							</div>
							<div className="phone">
								{this.props.data[this.props.id].phone}
							</div>
							<div className="phrase">
								{this.props.data[this.props.id].phrase}
							</div>
						</div>
						<div className="right-block">
							{(this.props.data[this.props.id].video === undefined)? "" : <VideoPlayer
							id={this.props.id}
							src={srcVideo+this.props.data[this.props.id].video+'.mp4'} />}
						</div>
					</div>
				</CSSTransition></div>
			</VisibilitySensor>
		)			
	}
}


const HumanPreview = connect(mapStateToProps("HumanPreview"), mapDispatchToProps("HumanPreview"))(Human_i);
export default HumanPreview;