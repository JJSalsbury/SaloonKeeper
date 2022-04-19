import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewProductForm from '../AddProductForm/AddProductForm';


function ProductList() {

    const dispatch = useDispatch();
    const product = useSelector(store => store.productReducer);



    useEffect(() => {
        dispatch({type: 'GET_PRODUCT'});
    }, []);

    return (
    <main>
    <h1>Product List</h1>
    <section className="product">
        {product.map((product) => {
            return (
                <div key={product.id} >
                <h3>PRODUCT NAME: {product.name}</h3>
                <p>AMOUNT: {product.amount}{product.amount_type}</p> 
                <p>TYPE: {product.type}</p>
                <p>PAR: {product.par}</p>
                <p>EXPECTED AMOUNT: {product.expected_amount}</p>
            </div>
            );
        })}
    </section>
</main>
    )
}

export default ProductList;