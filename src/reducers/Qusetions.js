import { ADD_QUESTION, RECIEVE_QUESTIONS, ANSWER_QUESTION} from "../Actions/Questions";

export default function questions(state={},action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
            case ANSWER_QUESTION:
                return {
                    ...state,
                    [action.qid]: {
                        ...state[action.qid],
                        [action.answer]: {
                            ...state[action.qid][action.answer],
                            votes: state[action.qid][action.answer].votes.concat([action.authedUserId])
                        }
                    }
                }
            case ADD_QUESTION:
                return {
                    ...state,
                    [action.id]: action
                }
            default:
            return state
    }
}