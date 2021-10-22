import { RECIEVE_USERS } from "../Actions/Users"
import { ANSWER_QUESTION, ADD_QUESTION } from '../Actions/Questions'

export default function users(state={},action){
    switch(action.type){
        case RECIEVE_USERS:
            return{
                ...state,
                ...action.users
            }
            case ANSWER_QUESTION: 
			return {
				...state,
				[action.authedUserId]: {
			        ...state[action.authedUserId],
			        answers: {
			        	...state[action.authedUserId].answers,
			            [action.qid]: action.answer
			        }
			    }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat([action.id])
                }
            }
        default:
            return state
    }
}