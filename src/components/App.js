import React, { Component} from 'react'
import { handleIntialData } from '../Actions/shared'
import {Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Home from './Home'
import Leaderboard from './Leaderboard'
import Add from './Add'
import NotFound from './NotFound'
import DetailsAnsweredQ from './DetailsAnsweredQ'
import DetailsUnansweredQ from './DetailsUnansweredQ'
import Update from './Update'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleIntialData())
  }
  render() {
    const{authedUser}=this.props
    if(authedUser===null){
      return (
        <div>
        <Login/>
        </div>
      )
      }
    return (
        <div>
        <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/questionsHome" component={Home}/>
        <Route exact path="/add" component={Add}/>
        <Route exact path="/leaderboard" component={Leaderboard}/>
        <Route exact path="/detailsUnansweredQ/:id" component={DetailsUnansweredQ}/>
        <Route exact path="/detailsAnsweredQ/:id" component={DetailsAnsweredQ}/>
        <Route exact path="/Update" component={Update}/>
        {/* for incorrect not found url */}
        <Route component={NotFound}/>    
        </Switch> 
      </div>
      )
}}
function mapStateToProps({authedUser}){ 
  return{
     authedUser 
  }
}
export default connect(mapStateToProps)(App)