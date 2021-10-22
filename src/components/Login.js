import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../Actions/authedUser'
import { FaUserPlus } from 'react-icons/fa'
class Login extends Component{
    updateAuthedUser=(authedUserKey)=>{
        this.props.dispatch(setAuthedUser(authedUserKey))
        this.props.history.push('/questionsHome')
    }
    render(){

        const{users}=this.props
        console.log("autheduser=",this.props.authedUser)
        return(
            <div className="Login">
                <div className="text-center text-light bg-dark navHeader">
                    <h1>Would You Rather...</h1>
                </div>
                <span className="center">
                    <h3>
                    Select a User to Login 
                    <FaUserPlus fontSize="1.5em" color="#6ba8e9"/>
                    </h3>
                    </span>
                <ul  className="container loginListUser">
                    {Object.keys(users).map((userId)=>(
                        <li key={users[userId].id} className="float-left" onClick={()=>{this.updateAuthedUser(users[userId])}}>
                            <div className="card" style={{width: "15rem"}}>
                                <img src={window.location.origin + users[userId].avatarURL} alt={users[userId].name} className="card-img-top img-fluid"/>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{users[userId].name}</h5>
                                    <span className="bg-warning">Login now</span>
                                </div>
                            </div>        
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
function mapStateToProps ({users,authedUser}) {  
    return {
      users,
      authedUser
    }
  }
export default withRouter(connect(mapStateToProps)(Login))