import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../Actions/authedUser'
class NotFound extends Component{
    LoginAgain=()=>{
        this.props.dispatch(clearAuthedUser())
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="container center">
                <h1 className="bg-warning text-danger pt-5 pb-5 pr-5 pl-5">
                    <span>404</span>
                    <br/>
                    Oops,The page you looking for does not exist. Or you are not Login
                </h1>
                <button className="btn bg-light" onClick={this.LoginAgain}>Login!</button>
            </div>
            )
    }
}
export default withRouter(connect()(NotFound))