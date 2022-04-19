import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import MenuButton from './menuButton';
import Search from './search';

class Menu_i extends React.Component {
	render() {
		let l = this.props.langPack;
		return (
			<div className="buttons">
				<div className="extra">
					<div className="input_search">
						<Search />
					</div>					
					<div className="buttons_lang">
						<MenuButton group="lang" action="ru"/>
						<MenuButton group="lang" action="en"/>
					</div>					
				</div>
				<div className="buttons_sort">
					<div className="buttons_title">{l.sort}</div>
					<div className="buttons_sort_type">
						<MenuButton group="type" action="id"/>
						<MenuButton group="type" action="name"/>
						<MenuButton group="type" action="age"/>
					</div>
					<div className="buttons_sort_direction">
						<MenuButton group="direction" action="tohigh"/>
						<MenuButton group="direction" action="tolow"/>
					</div>					
				</div>
				<div className="buttons_view">
					<div className="buttons_title">{l.view}</div>
					<div className="buttons_view_type">
						<MenuButton group="view" action="table"/>
						<MenuButton group="view" action="preview"/>
					</div>
				</div>
			</div>
		);
	}
}


const Menu = connect(mapStateToProps("Menu"), mapDispatchToProps("Menu"))(Menu_i);
export default Menu;