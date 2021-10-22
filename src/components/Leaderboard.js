import React,{Component} from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'
class  Leaderboard extends Component{
    render(){
        const{listedUsers}=this.props
        //order users according to their score from bigger to smaller
        const orderedUsers=listedUsers.sort((a,b)=>b.score-a.score)
        console.log("listduser=",orderedUsers)
        return(
            <div>
                <Nav/>
                <div className="container mt-5">
                <ol className="list-group">

                {Object.keys(orderedUsers).map((user)=>(
                    <li key={orderedUsers[user].id} className ="list-group-item d-flex justify-content-between align-items-center bg-dark">
                        <div>
                        <img src={window.location.origin + orderedUsers[user].avatarURL} className="rounded-circle" style={{width:"5em"}} alt={orderedUsers[user].name}/>
                        <p className="text-light">{orderedUsers[user].name}</p>
                        </div>
                        <div className="text-light h4">Questions: 
                        <span className ="badge bg-info ">{orderedUsers[user].questions.length}</span>
                        </div>
                        <div className="text-light h4">Answers: 
                        <span className ="badge bg-info">{Object.keys(orderedUsers[user].answers).length}</span>
                        </div>
                        <div className="text-light h4">Score: 
                        <span className ="badge bg-info">{orderedUsers[user].score}</span>
                        </div>
                    </li>
                ))}
                </ol>
            </div>
            </div>
        )
    }
}
function mapStateToProps({users}){
    const listedUsers = Object.values(users).map( (user) => {return Object.assign({},user,user.score = Object.keys(user.answers).length + user.questions.length) })

    return{
        listedUsers,
        users
        }
}
export default connect(mapStateToProps)(Leaderboard)