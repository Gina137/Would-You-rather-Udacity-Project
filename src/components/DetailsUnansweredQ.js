import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'
import {handleAddAnswer} from '../Actions/Questions'
import { Redirect } from 'react-router-dom';
class DetailsUnansweredQ extends Component{
    state={
        selectedOption:""
    }
    updateSelectedOption=(Value)=>{
        this.setState(()=>({
           selectedOption:Value
        }))
    }
    submitAnswer=()=>{

        const{id,authedUser,dispatch}=this.props
        const{selectedOption}=this.state
        console.log("ID=",id)
        console.log("AUTH=",authedUser)
        console.log("ANSW=",selectedOption)
            dispatch(handleAddAnswer({
                authedUserId:authedUser.id,
                qid:id,
                answer: selectedOption,
              }))
              //sending id of question in the url to detailsAnswered Q to access it through match.params
              this.props.history.push(`/detailsAnsweredQ/${id}`)
    }
    render(){
        console.log("props coming=" ,this.props)
        const{
            id,
            question,
            name,
            avatar,
            optionOneText,
            optionTwoText,
            authedUser
        }=this.props
        //if question id is not exist
        if(question===null){
            <Redirect to="/NotFound"/>
        }
        return(
            <div>
                <Nav/>
                <div className="card text-center mt-3">
                <div className="card-header">
                    <h3 className="text-dark">Asked by: {name}</h3>
                    <img src={window.location.origin + avatar} className="rounded-circle" style={{width:"5em"}} alt={name}/>
                </div>
                <div className="card-body text-dark text-center unans">
                    <select onChange={(e)=>{this.updateSelectedOption(e.target.value)}} defaultValue="none">
                        <option value="none" className="text-muted">Select...</option>
                        <option value="optionOne">{optionOneText}</option>
                        <option value="optionTwo">{optionTwoText}</option>
                    </select>
                    <button className="bg-info btn center" onClick={()=>{(authedUser&&id&&this.state.selectedOption)?this.submitAnswer():null}}>Submit</button>
                </div> 
                </div> 
            </div>
            )
    }
}
function mapStateToProps({users,questions,authedUser},{match}){
    const{id}=match.params
    const question=questions[id]
    const author=question?users[question.author]:null
    const name=author.name
    const avatar=author.avatarURL
    const optionOneText=(question&&question.optionOne.text)?question.optionOne.text:""
    const optionTwoText=(question&&question.optionTwo.text)?question.optionTwo.text:""
    return{
        id,
        question,
        name,
        avatar,
        optionOneText,
        optionTwoText,
        authedUser
    }
}
export default withRouter(connect(mapStateToProps)(DetailsUnansweredQ))

