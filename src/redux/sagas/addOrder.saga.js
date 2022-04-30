import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOrder(action) {
    //add movie to DB
    try{
        console.log('Payload in addOrder SAGA:', action.payload);
        const product = yield axios.post('/api/count', action.payload)
        // yield axios.put(`/api/product/${product.data.id}`)
        console.log('addOrder SAGA; PRODUCT IS:', product.data.id);
        yield put({ type: 'SET_PRODUCT_ORDERED', payload: product.data.id });
        // console.log('added count:', product.data)
    } catch (error) {
        console.log('addCount error:', error)
    } 
}

function* addOrderSaga() {
    // yield takeLatest('COUNT_ITEM', addCount);
    yield takeLatest('ADD_ORDER', addOrder);
    console.log('IN ADD ORDER SAGA');
    
}

export default addOrderSaga;