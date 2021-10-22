import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class  UnansweredQuestions extends Component{
    render(){
        const{sortedQuestions,users,authedUser}=this.props
        console.log("questions=",sortedQuestions)
        /*const res = authedUser ? Object.keys(authedUser.answers):null
        console.log("res=",res)*/

        return(
                <ol>
                {sortedQuestions.map((idq)=>
                // checking only if autheduser found and if id of the questions is not found in his answers{} 
                (authedUser && !(Object.keys(authedUser.answers).includes(idq.id)))?(
                    <li key={idq.id}>
                    <div className ="card">
                    <Link to={`detailsUnansweredQ/${idq.id}`}>
                    <div className ="card-header bg-light text-center">
                        <div>
                            <img src={window.location.origin + users[idq.author].avatarURL} alt={ users[idq.author].name} style={{width:"5em"}}/>
                        </div>
                        <div className="text-dark h3">
                            {users[idq.author].name}
                        </div>
                    </div>
                    <div className ="card-body">
                        <div>
                        <h3 className ="card-title text-center">Would You Rather</h3>
                        <p className ="card-text">{idq.optionOne.text}.</p>
                        <p className ="card-text">{idq.optionTwo.text}.</p>
                        </div>
                    </div>
                    <div className ="card-footer bg-light text-center">
                        <button className ="bg-primary">View Poll</button>
                    </div>
                    </Link>
                    </div>
                </li>
                ):null)}
                </ol>
        )
    }
}
function mapStateToProps({questions,users,authedUser}){
    const questionsValues = Object.values(questions)
    const sortedQuestions = questionsValues.sort((a, b) => b.timestamp - a.timestamp);
    return{
        sortedQuestions,
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(UnansweredQuestions)