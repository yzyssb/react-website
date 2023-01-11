import './App.css';
import { Component } from 'react'
import { createHashHistory } from "history";
import { Modal,Input,Button,List,Typography } from 'antd';
// import './App.less'

export default class App extends Component {
	constructor(props){
		super(props)
		this.state={
			isModalVisible:!!sessionStorage.getItem('isSign')?false:true,
			value:'',
			
			menus:[
				{title:'个人技术文档',link:'my-favor/'},
				{title:'杨贤明-移动端',link:'yxm/site/index.html'},
				{title:'杨贤明-管理后台',link:'yxm-admin/index.html'},
				{title:'echarts-中国各省市',link:'echarts-test1/1.html'},
				{title:'react项目',link:'react-test/index.html'},
				{title:'微信测试',link:'wx_test.html'},
				{title:'nuxt测试',link:'nuxt'},
				{title:'vue-proxy',link:'vue-proxy/index.html'},
				{title:'当前react项目',link:'/Tab',linkType:'react'},
			]
		}
	}
	
	inputChange=(e)=>{
		this.setState({
			value:e.target.value
		})
	}
	
	confirm = () => {
		if(this.state.value==='yzyssb'){
			sessionStorage.setItem('isSign',true)
			this.setState({
				isModalVisible:false
			})
		}
	}
	
	itemClick(e,item){
		if(item.linkType==='react'){
			if(!!item.link){
				let history=createHashHistory()
				console.log(history)
				history.push({
					pathname:item.link,
					search:'id=1'
				})
				history.go()
				return
			}
			else return
		}
		if(!!item.link) window.location.href='https://yangzhiyuan.top/'+item.link
	}

	render(){
		return (
			<div>
				{this.state.isModalVisible?(
					<Modal title="请输入密码" visible={this.state.isModalVisible} footer={null} centered="true" closable={false} width={400}>
						<Input.Group compact style={{margin:'20px auto 30px'}}>
							<Input style={{ width: 'calc(100% - 60px)' }} defaultValue={this.state.value} onChange={this.inputChange} onPressEnter={this.confirm} />
							<Button type="primary" style={{width:'60px'}} onClick={this.confirm}>提交</Button>
						</Input.Group>
					</Modal>):(
					<List
						bordered
						dataSource={this.state.menus}
						renderItem={item => (
							<List.Item onClick={e=>this.itemClick(e,item)}>
							  <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
							</List.Item>
						)}
					/>
				)}
			</div>
		);
	}
}