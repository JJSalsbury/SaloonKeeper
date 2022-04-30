// Used to store shelf items returned from the server
const productOrderedReducer = (state = [], action) => {
    if(action.type === 'SET_PRODUCT_ORDERED') {
        // action.payload is the object from the DB
        return action.payload;
    } 
            return state;
    };


export default productOrderedReducer;