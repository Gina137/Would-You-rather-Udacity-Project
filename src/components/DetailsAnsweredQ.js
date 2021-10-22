import React,{Component} from 'react'
import {connect} from 'react-redux'
import {AiFillCheckCircle} from 'react-icons/ai'
import Nav from './Nav'
import Update from './Update'
import { Redirect } from 'react-router-dom';
class DetailsAnsweredQ extends Component{
    render(){
        console.log("props coming=" ,this.props)
        const{
            question,
            name,
            avatar,
            optionOneText,
            optionTwoText,
            votesOptionOne,
            votesOptionTwo,
            percentVotesOne,
            percentVotesTwo,
            authedUser
        }=this.props
        const answeredOptionOne=(question&&question.optionOne.votes&&question.optionOne.votes.includes(authedUser.id))?true:false
        const answeredOptionTwo=(question&&question.optionTwo.votes&&question.optionTwo.votes.includes(authedUser.id))?true:false
        //incase user searched for a question that doesnot exist
        if(question===null){
            <Redirect to="/NotFound"/>
        }
        return(
            <div>
                <Nav/>
                <div className="card mt-4">
                <div className="card-header bg-dark text-center">
                    <h3 className="text-light">Asked by: {name}</h3>
                    <img src={window.location.origin + avatar}className="rounded-circle" style={{width:"5em"}} alt={name} />
                </div>
                <div className="card-body ml-3 d-flex justify-content-center align-items-center">
                    <div>
                    {answeredOptionOne&&
                    (<span className="ml-5 text-dark">
                    Your Answer:
                    <AiFillCheckCircle color={"green"} fontSize={"2em"}/>
                    </span>)}
            <div className=" bg-dark mr-5 pt-5 pb-5 pl-5 pr-5">
                    <h3 className="card-text text-light">{optionOneText}.</h3>
                    <h4 className="text-center text-light bg-warning">Votes: {votesOptionOne}</h4>
                    <h4 className="text-center text-light bg-danger">Percentage: {percentVotesOne} %</h4>
                    </div>
                    </div>
                    <div>
                    {answeredOptionTwo&&
                    (<span className="ml-5 text-dark">
                        Your Answer:
                        <AiFillCheckCircle color={"green"} fontSize={"2em"}/>
                        </span>)}
                    <div className=" bg-dark ml-5 pt-5 pb-5 pl-5 pr-5 ">
                    <h3 className="card-text text-light">{optionTwoText}.</h3>
                    <h4 className="text-center text-light bg-warning">Votes: {votesOptionTwo}</h4>
                    <h4 className="text-center text-light bg-danger">Percentage: {percentVotesTwo} %</h4>
                    </div>
                    </div>
                </div>
                </div>
                <Update/>
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
    const votesOptionOne=(question&&question.optionOne.votes)?question.optionOne.votes.length:0
    const votesOptionTwo=(question&&question.optionTwo.votes)?question.optionTwo.votes.length:0
    const optionOneText=(question&&question.optionOne.text)?question.optionOne.text:""
    const optionTwoText=(question&&question.optionTwo.text)?question.optionTwo.text:""
    const totalVotes=votesOptionOne+votesOptionTwo
    const percentVotesOne=((votesOptionOne/totalVotes)*100).toFixed(2)
    const percentVotesTwo=((votesOptionTwo/totalVotes)*100).toFixed(2)
    return{
        question,
        author,
        name,
        avatar,
        optionOneText,
        optionTwoText,
        votesOptionOne,
        votesOptionTwo,
        percentVotesOne,
        percentVotesTwo,
        authedUser
    }
}
export default connect(mapStateToProps)(DetailsAnsweredQ)