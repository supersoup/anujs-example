import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
	
	render() {
		return (
			<div>
				<span>Hello</span>
				<span>{this.props.name}</span>
			</div>
		);
	}
}

ReactDOM.render(
<HelloMessage name="man"/>,
	document.querySelector('#container')
);
