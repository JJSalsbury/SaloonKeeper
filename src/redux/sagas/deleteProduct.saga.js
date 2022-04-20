import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteProduct(action) {
    try {
        const id = action.payload
        yield axios.delete(`/api/product/${id}`); //send id of item to delete

        yield put({ type: 'GET_PRODUCT' }); //call get for updated shelf list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* deleteProductSaga() {
    yield takeLatest('DELETE_ITEM', deleteProduct);
}

export default deleteProductSaga;