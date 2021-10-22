import React,{Component} from 'react'
import {connect} from 'react-redux'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'
import Nav from './Nav'

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                {/* nav pill external api used */}
                <div className="searchContainer">   
                <ul className="nav nav-pills d-flex justify-content-center align-items-center mt-3"npm>
                <li className="active" key={"home"}><a data-toggle="pill" href="#home">Unanswered Questions</a></li>
                <li key={"menu1"}><a data-toggle="pill" href="#menu1">Answered Questions</a></li>
                </ul>
                
                <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <UnansweredQuestions/>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <AnsweredQuestions/>
                </div>
                </div> 
            </div> 
            </div>
            )
    }
}
export default connect()(Home)