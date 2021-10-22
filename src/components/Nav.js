import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class Nav extends Component{
    logOut=()=>{
        this.props.history.push('/NotFound')
    }

    render(){
        const{authedUser}=this.props
        console.log("Name=",authedUser?authedUser.name:" ")
        return(
            <div>
                <div className="text-center text-light bg-dark navHeader">
                    <h1>Would You Rather...</h1>
                </div>
                <nav className='nav bg-grey'>
            <ul className="container-fluid d-flex justify-content-between align-items-start">
                <li key="Home" className="ml-4 mt-4 h4 d-flex d-flex justify-content-between align-items-start" >
                    <NavLink to='/questionsHome' activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li key="NewQuestion" className="ml-4 mt-4 h4">
                    <NavLink to='/add' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li key="LeaderBoard" className="ml-4 mt-4 h4">
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
                <li key="userInfo" className="ml-4 mt-2 d-flex justify-content-center align-items-center">
                        {authedUser ? (
                            <div className="ml-3 d-inline">
                            <p className="float-left">Welcome</p> 
                            <img src={window.location.origin + authedUser.avatarURL} alt={authedUser.name} className="rounded-circle" style={{width:"2em"}}/>
                            <p className="float-right text-warning">{authedUser.name}</p> 
                            </div>
                            ):null}
                    </li>
                <li key="logOut">
                    <button className="bg-danger text-light h4" onClick={this.logOut}>Log out</button>
                </li>
            </ul>
        </nav>
            </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return{
        authedUser,
    }
}
export default withRouter(connect(mapStateToProps)(Nav))