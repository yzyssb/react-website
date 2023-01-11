///路由页面1
import {Component} from 'react'
import {Link,Outlet} from 'react-router-dom'
import { connect } from 'react-redux';
import { createHashHistory } from "history";
// 动作层的拆离
import { increase,decrease } from '../actions/count';

class Tab extends Component {
	componentDidMount(){
		let params=this.paramsFormat()
		console.log(params)
	}
	
	paramsFormat(){
		let history=createHashHistory(),search=history.location.search.slice(1),obj={}
		search.split('&').forEach(v=>{
			obj[v.split('=')[0]]=v.split('=')[1]
		})
		return obj
	}
	
	render(){
		const { count, increase } = this.props;
		return (
			<div>
				<h1>路由练习</h1>
				<p>count:{count}</p>
				<button onClick={increase}>计数</button>
				<nav>
					<Link className = 'link' to='/Tab/Tab1'> Tab1</Link>
					<Link className = 'link' to='/Tab/Tab2'> Tab2 </Link>
					<Link className = 'link' to='/Tab/Tab3'> 没有的路由 </Link>
				</nav>
				
				<Outlet />
			</div>
		)
	}
}

// 5reducer的state转props是通过mapStateToProps实现的
const mapStateToProps = (state) => {
	return {
        //将state.count状态里的count转为count，也就是属性里的count
		count: state.count,
	};
};

// 9 事件就是动作，动作就是函数，可以定义一个mapDispatchToProps，因为事件是无法进行传递的，**唯一能够传递的内容只有属性props**
// 11 mapDispatchToProps只做派发操作，不做具体动作执行
const mapDispatchToProps = {
	increase,
	decrease
};

// 6 props属性与组件之间还没有建立起联系，所以需要利用connect进行关联,原来状态已经转为props属性了，但是与component还没有建立联系，所以需要利用从connect将属性与组件建立起关联，最后变成的仍旧是一个组件。App是组件，connect是高阶函数，AppContainer是高阶组件
// 10 mapDispatchToProps也需要利用connect与组件建立起关联
const TabContainer = connect(mapStateToProps, mapDispatchToProps)(Tab);

export default TabContainer;