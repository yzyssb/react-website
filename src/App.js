import './App.css';
import { Component } from 'react'
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './App.less'

export default class App extends Component {
  render(){
	  return (
	    <div className="app">
			<p className="test">1234</p>
	  		<Button danger>Default</Button>
	  	</div>
	  );
  }
}