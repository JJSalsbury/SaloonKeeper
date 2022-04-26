import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import newProductForm from '../newProductForm/newProductForm';
import ProductItem from '../ProductItem/ProductItem';
import { useHistory } from 'react-router-dom';
import AddCountForm from '../OrderReceivedForm/OrderReceivedForm';

function ProductListPage() {

    const dispatch = useDispatch();
    const ProductList = useSelector(store => store.productReducer);
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
                {ProductList.map((product, i) => {
                    return (                        
                        <ProductItem
                            key={i}
                            product={product} />

                    );
                })}
            </section>
        </main>
        </>
    )
}

export default ProductListPage;