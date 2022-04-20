import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProduct() {
    // get all movies from the DB
    try {
        const product = yield axios.get('/api/product');
        console.log('get all:', product.data);
        yield put({ type: 'SET_PRODUCT', payload: product.data });

    } catch {
        console.log('get all error');
    }
}

function* productSaga() {
    yield takeLatest('GET_PRODUCT', getProduct);
}

export default productSaga;