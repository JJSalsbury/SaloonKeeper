import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addProduct(action) {
    //add movie to DB
    try{
        console.log('Payload in addProduct:', action.payload);
        const product = yield axios.post('/api/product', action.payload)
        console.log('added product:', product.data)
    } catch (error) {
        console.log('addProduct error:', error)
    }
}

function* addProductSaga() {
    yield takeLatest('ADD_PRODUCT', addProduct);
}

export default addProductSaga;