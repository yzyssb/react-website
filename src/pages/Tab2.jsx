///路由页面2
import React,{Component} from 'react'
import store from '../store/index'

export default class Tab2 extends Component {
	constructor(){
		super()
		this.state={
			dataSource: [],
			columns: [
				{
					title: '编号', //表头字段
					dataIndex: 'id', //调用数据对应的字段 table.id
				},
				{
					title: '姓名',
					dataIndex: 'name',
				},
				{
					title: '年龄',
					dataIndex: 'age',
				}
			]
		}
	}
	
	componentWillMount(){
		this.setState({
			dataSource: store.getState()
		},()=>{
			console.log(this.state.dataSource)
		});
	}
	
	mainTap(){
		store.dispatch({
			type: 'insert',
			data: {
				name: "锤子",
				age: 20
			}
		})
		this.setState({
			dataSource: store.getState()
		},()=>{
			console.log(this.state.dataSource)
		});
	}
	
	render(){
		return (
		    <main style={{ padding: "1rem 0" }} onClick={()=>this.mainTap()}>
		      <h2>我是Tab2</h2>
		    </main>
		  );
	}
}