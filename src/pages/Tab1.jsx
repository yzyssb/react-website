///路由页面1
import React from 'react'
import { getCategory } from '../request/home.js'

export default class Tab1 extends React.Component {
	constructor(){
		super()
		this.state={
			a:1
		}
	}
	
	search=()=>{
		console.log(1111)
		getCategory().then(res=>{
			console.log(res)
		})
	}
	changeA=(e)=>{
		e.stopPropagation()
		this.setState({
			a:'222'
		})
	}
	
	componentDidMount(){
		// this.search()
		console.log(2)
	}
	
	render(){
		return (
			// 文档中，<main> 元素是唯一的，所以不能出现一个以上的 <main> 元素
			<main style={{ padding: "1rem 0" }} onClick={this.search}>
			  <h2>我是Tab1</h2>
			  <p onClick={e=>this.changeA(e)}>{this.state.a}</p>
			</main>
		)
	}
}