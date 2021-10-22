import { saveQuestion , saveQuestionAnswer } from "../utils/api"
export const RECIEVE_QUESTIONS="RECIEVE_QUESTIONS"
export const ADD_QUESTION="ADD_QUESTION"
export const ANSWER_QUESTION="ANSWER_QUESTION"

export function recieveQuestions(questions){
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {

        const { authedUser } = getState()

        const questionInfo = {
            optionOneText,
            optionTwoText,
            author: authedUser.id
        }


        return saveQuestion(questionInfo)
            .then((question) => {
                console.log('new question=', question);
                dispatch(addQuestion(question))
            })
            .catch(() => {
                alert('Error occured. Try again ')
            })
    }
}

function addAnswer({ authedUserId, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUserId, 
        qid, 
        answer
    }
}

export function handleAddAnswer(info) {
    return (dispatch) => {
        dispatch(addAnswer(info))
        return saveQuestionAnswer(info)
            .catch(() => {
                alert("sorry!.Try Again.")
            })
    }
}