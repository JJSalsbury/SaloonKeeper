// Used to store shelf items returned from the server
const countReducer = (state = [], action) => {
    switch(action.type) {
        case 'COUNT_ITEM': 
        // action.payload is the object from the DB
        return action.payload;
        case 'SET_COUNT': 
        // action.payload is the object from the DB
        return action.payload;
        
        default: 
            return state;
        }
    };


export default countReducer;