// Used to store shelf items returned from the server
const setCountReducer = (state = [], action) => {
    if(action.type === 'SET_COUNT') {
        // action.payload is the object from the DB
        return action.payload;
    } 
            return state;
    };


export default setCountReducer;