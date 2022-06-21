import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Tab from './pages/Tab.jsx'
import Tab1 from './pages/Tab1.jsx'
import Tab2 from './pages/Tab2.jsx'
import Tab4 from './pages/Tab4.jsx'

import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';

// 仓库层的拆离
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
			 <Routes>
			   <Route path = '/' element = {<App/>} />
			   <Route path = '/Tab/' element = {<Tab/>}> 
				   <Route path = 'Tab1' element = {<Tab1/>} />
				   <Route path = 'Tab2' element = {<Tab2/>} />
				   <Route path = '*' element={<p>未匹配到路由时，会跳转此处。</p>} />
			   </Route>
			   <Route path = '/Tab4' element = {<Tab4/>} />
			 </Routes>
			</Provider>
		</ConfigProvider>
	</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
