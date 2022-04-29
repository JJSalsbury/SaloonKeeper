import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCount(action) {
    try {
        const id = action.payload
        console.log(action.payload)
        yield axios.delete(`/api/count/${id}`); //send id of item to delete

        yield put({ type: 'GET_PRODUCT' }); //call get for updated count list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* deleteProduct(action) {
    try {
        const id = action.payload
        console.log(action.payload)
        yield axios.delete(`/api/product/${id}`); //send id of item to delete

        yield put({ type: 'GET_PRODUCT' }); //call get for updated product list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_COUNT', deleteCount);
    yield takeLatest('DELETE_ITEM', deleteProduct);
}

export default deleteSaga;