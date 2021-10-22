import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'
import { handleAddQuestion } from '../Actions/Questions'
class Add extends Component{
    state={
        optionOne:"",
        optionTwo:""
    }
    updateOptionOne=(value)=>{
        this.setState(()=>({
            optionOne:value
        }))
    }
    updateOptionTwo=(value)=>{
    this.setState(()=>({
        optionTwo:value
    }))
    }

    handleSubmit=(e)=>{
        //prevent form auto reload 
        e.preventDefault()
        const{dispatch}=this.props
        const{optionOne,optionTwo}=this.state
        console.log("question options",optionOne,"&",optionTwo)
        dispatch(handleAddQuestion(optionOne,optionTwo))
        this.props.history.push('/questionsHome')
        //reset options
        this.setState(()=>({
            optionOne:"",
            optionTwo:""
        }))
    }
    render(){
        return(
            <div>
                <Nav/>
                {/* adding a new question for authedUser */}
                <div className="card container mt-5">
                    <div className="card-header text-center text-dark">
                        <h1>Add New Question!</h1>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-dark">Would you rather...</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label h4 text-dark">Option One </label>
                            <input type="text" name="option1" className="form-control h4"  placeholder="Enter Option 1" value={this.state.optionOne} onChange={(e)=>{this.updateOptionOne(e.target.value)}}/>
                        </div>
                        <div  className="mb-3">
                            <label className="form-label h4 text-dark">Option Two </label>
                            <input type="text" name="option2" className="form-control h4"  placeholder="Enter Option 2" value={this.state.optionTwo} onChange={(e)=>{this.updateOptionTwo(e.target.value)}}/>
                        </div>
                        <span className="d-flex justify-content-center align-items-center">
                            <button className="btn bg-info center text-light">Submit</button>
                        </span>
                        </form>
                    </div>
                    </div> 
                </div> 
            )
    }
}
export default withRouter(connect()(Add))