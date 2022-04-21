const editReducer = (state = [], action) => {
    switch(action.type) {
        case 'EDIT_ITEM': 
        // action.payload is the object from the DB
        return action.payload;
        case 'SET_EDIT': 
        // action.payload is the object from the DB
        return action.payload;
        
        default: 
            return state;
        }
    };




export default editReducer;