export default function LoginReduce(states,action){
    switch(action.type){
        case "logins":{
            return { isAuth:true,data:action.payload}
        }
        case "logouts":{return {isAuth:false,data:action.payload}
        } 
        default:{return states}
    }
}
export  function Signs(stated,action){
switch(action.type){
case "signup":{
    return [...stated,action.payload]
}
default:{return stated}
}
}