import { combineReducers }from 'redux'
import users from './Users'
import questions from './Qusetions'
import authedUser from './authedUser'
export default combineReducers ({
    users,
    questions,
    authedUser
})