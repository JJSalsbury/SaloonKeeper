import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import newProductForm from '../newProductForm/newProductForm';
import ProductItem from '../ProductItem/ProductItem';


function ProductList() {

    const dispatch = useDispatch();
    const product = useSelector(store => store.productReducer);


    useEffect(() => {
        dispatch({ type: 'GET_PRODUCT' });
    }, []);

    return (
        <>
        <main>
            <h1>Product List</h1>
            <section className="product">
                {product.map((product, i) => {
                    return (
                        <ProductItem
                            id={i}
                            product={product} />
                    );
                })}
            </section>
            <button>Add Product "Dummy"</button>
        </main>
        </>
    )
}

export default ProductList;