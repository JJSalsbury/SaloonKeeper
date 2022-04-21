import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editProduct(action) {

    const productId = action.payload.id;
    const product = action.payload.product;
    console.log('saga editProduct id & product:', productId, product);
    
    try {
        yield axios.put(`/api/product/${productId}`, product); //send id of item to delete
        yield put({ type: 'SET_EDIT', payload: product }); //call get for updated shelf list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editProductSaga() {
    yield takeLatest('EDIT_PRODUCT', editProduct);
}

export default editProductSaga;