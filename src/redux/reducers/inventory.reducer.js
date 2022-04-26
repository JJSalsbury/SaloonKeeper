// Used to store shelf items returned from the server
const inventoryReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ORDER_RECEIVED': 
        // action.payload is the object from the DB
        return action.payload;
        
        default: 
            return state;
        }
    };


export default inventoryReducer;