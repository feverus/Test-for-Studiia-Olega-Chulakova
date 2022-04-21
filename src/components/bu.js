import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';
import { useLocation, useNavigate } from 'react-router-dom';

function click(f, action, group, menu, query, navigate) {	
	//f - функция диспатч, в которую передаем экшн
	let sortType = (query.get("sortType")!==null) ? query.get("sortType") : menu.sortType;
	let sortDirection = (query.get("sortDirection")!==null) ? query.get("sortDirection") : menu.sortDirection;
	let view = (query.get("view")!==null) ? query.get("view") : menu.view;
	let lang = (query.get("lang")!==null) ? query.get("lang") : "ru";

	switch (group) {
		case "type": {
			sortType = action;break;
		}	
		case "direction": {
			sortDirection = action;break;
		}	
		case "view": {
			view = action;break;
		}	
		case "lang": {
			lang = action;break;
		}		
	}

	navigate('/?' +
				"sortType=" + sortType +
				"&sortDirection=" + sortDirection +
				"&view=" + view +
				"&lang=" + lang
	);
	switch (group) {
		case "type": 
		case "direction": {
			f(sortType, sortDirection);break;
		}	
		case "lang":
		case "view": {
			f(action);
		}		
	}
	
}

function Bu_i(props) {	
	const { search } = useLocation(); 
	const navigate  = useNavigate();
	let query = React.useMemo(() => new URLSearchParams(search), [search]);	
	let inProp = false;
	switch (props.group) {
		case "type": {
			if (props.menu.sortType === props.action) {inProp = true;}
			break;
		} 
		case "direction": {
			if (props.menu.sortDirection === props.action) {inProp = true;}
			break;
		}
		case "view": {
			if (props.menu.view === props.action) {inProp = true;}
			break;
		}	
		case "lang": {
			if (props.lang === props.action) {inProp = true;}
		}		
	}	
	return (
		<CSSTransition in={inProp} timeout={1000} classNames="bu"
		appear={true}>
			<button onClick={() => click(props.f, props.action, props.group, props.menu, query, navigate)}><span>{props.title}</span></button>
		</CSSTransition>
	);
}

const Bu = connect(mapStateToProps("Menu"), mapDispatchToProps("Menu"))(Bu_i);
export default Bu;