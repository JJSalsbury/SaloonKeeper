import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import newProductForm from '../newProductForm/newProductForm';
import ProductItem from '../ProductItem/ProductItem';
import { useHistory } from 'react-router-dom';

function ProductList() {

    const dispatch = useDispatch();
    const product = useSelector(store => store.productReducer);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCT' });
    }, []);

    const addProduct = () => {
        console.log('addProduct clicked');
        history.push(`/addproduct`);
    }

    return (
        <>
        <main>
            <h1>Product List</h1>
            <button onClick={addProduct}>Add Product</button>
            <section className="product">
                {product.map((product, i) => {
                    return (
                        <ProductItem
                            id={i}
                            product={product} />
                    );
                })}
            </section>
            
        </main>
        </>
    )
}

export default ProductList;