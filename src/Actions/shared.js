import { getInitialData } from "../utils/api"
import { recieveQuestions } from "./Questions"
import { recieveUser } from "./Users"
export function handleIntialData(){
    return (dispatch)=>{
        getInitialData().then(({users,questions})=>{
            dispatch(recieveUser(users))
            dispatch(recieveQuestions(questions))
        })
    }
}