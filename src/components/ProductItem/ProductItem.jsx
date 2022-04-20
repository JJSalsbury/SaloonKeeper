import { useDispatch, useSelector } from 'react-redux';


function ProductItem({product}) { //item coming from .map on ShelfPage 

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    console.log(product);

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: product.id }) //sends item id to saga with delete request
    }

    // const handleClick = () => {
    //     dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    // }


    return (
        <>
        <main>
            <h1>Product Details</h1>
                <div key={product.id} >
                <h3>PRODUCT NAME: {product.name}</h3>
                <p>AMOUNT: {product.amount}{product.amount_type}</p> 
                <p>TYPE: {product.type}</p>
                <p>PAR: {product.par}</p>
                <p>EXPECTED AMOUNT: {product.expected_amount}</p>
                <button onClick={handleDelete}>Delete Product</button>
            </div>
        </main>
        </>
    );
}

export default ProductItem;