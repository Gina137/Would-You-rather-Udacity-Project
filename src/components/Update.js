import React,{Component} from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../Actions/authedUser'
class Update extends Component{
    LoginAgain=()=>{
        this.props.dispatch(clearAuthedUser())
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="container center" style={{marginTop:"5em"}}>
                <span className="bg-light text-dark h5 pt-5 pb-5 pr-5 pl-5" style={{cursor: "pointer"}} onClick={this.LoginAgain}>Login Again To See Users Updates!</span>
            </div>
            )
    }
}
export default withRouter(connect()(Update))