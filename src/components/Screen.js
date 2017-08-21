import React, { Component } from 'react';
import style from 'styles/Screen.css';

class Screen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { container } = style;
		return <div className={container}>123</div>;
	}
}

export default Screen;
