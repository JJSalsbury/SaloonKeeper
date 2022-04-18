// Used to store shelf items returned from the server
const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return action.payload;
        default:
            return state;
    }
};



export default productReducer;