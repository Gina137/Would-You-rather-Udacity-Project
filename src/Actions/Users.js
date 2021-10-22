export const RECIEVE_USERS="RECIEVE_USERS"
export function recieveUser(users){
    return {
        type: RECIEVE_USERS,
        users
    }
}
