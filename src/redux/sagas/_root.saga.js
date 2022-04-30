import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import productSaga from './product.saga';
import addProductSaga from './addProduct.saga';
import deleteSaga from './delete.saga';
import editProductSaga from './editProduct.saga';
import countSaga from './count.saga';
import addOrderSaga from './addOrder.saga';
import startCountSaga from './startCount.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    productSaga(),
    addProductSaga(),
    deleteSaga(),
    editProductSaga(),
    countSaga(),
    addOrderSaga(),
    startCountSaga()
  ]);
}
