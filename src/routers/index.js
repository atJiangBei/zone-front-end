import React , { Component } from "react"
import {Route} from "react-router-dom"
import Signin from "./../components/basic/signin.js"
import Register from "./../components/basic/register.js"
import Home from "./../components/home/index.js"

export default class RouteIndex extends Component{
	render(){
		return(
		<div>
			<Route path="/register" component={Register}></Route>
			<Route path="/signin" component={Signin}></Route>
			<Route path="/home" component={Home}></Route>
		</div>
		)
	}
}