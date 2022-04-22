import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import Bu from './bu';

class MenuButton_i extends React.Component {
	render() {
		let l = this.props.langPack;
		switch (this.props.group) {
			case "type": 
			return (
				<Bu f={this.props.doChangeSortType} action={this.props.action} title={l[this.props.action]} group={this.props.group} />
			);	
			case "direction": 
			return (
				<Bu f={this.props.doChangeSortDirection} action={this.props.action} title={l[this.props.action]} group={this.props.group} />
			);	
			case "view": 
			return (
				<Bu f={this.props.doChangeView} action={this.props.action} title={l[this.props.action]} group={this.props.group} />	
			);	
			case "lang": 
			return (
				<Bu f={this.props.doSetLang} action={this.props.action} title={l[this.props.action]} group={this.props.group} />	
			);			
		}
	}
}


const MenuButton = connect(mapStateToProps("Menu"), mapDispatchToProps("Menu"))(MenuButton_i);
export default MenuButton;