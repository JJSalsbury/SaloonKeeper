import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editCount(action) {

    const countId = action.payload.id;
    const product = action.payload.product;
    console.log('saga editProduct id & product:', countId, product);
    
    try {
        yield axios.put(`/api/count/${countId}`, product); //send id of item to delete
        yield put({ type: 'SET_EDIT_COUNT', payload: product }); //call get for updated shelf list
    } catch (error) {
        console.log('Error on editCount PUT REQ', error);
    }
}

function* editCountSaga() {
    yield takeLatest('EDIT_COUNT', editCount);
}

export default editCountSaga;
