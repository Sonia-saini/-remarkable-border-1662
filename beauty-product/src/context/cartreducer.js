
export default function Reducer(state,action){
    switch(action.type){
        case "add":{
            return [...state,action.payload]
        };
        
        case "remove":{
            var filtered=state.filter((el)=>el.id!==action.payload)
            return filtered;
        };
        
            
            case "checkout":{return []};
            default :{return state}
    }    
    
}