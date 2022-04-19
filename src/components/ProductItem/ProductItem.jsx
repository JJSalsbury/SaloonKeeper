import { useDispatch, useSelector } from 'react-redux';


function ProductItem({product}) { //item coming from .map on ShelfPage 

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    console.log(product);
    const handleClick = () => {
        dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    }


    return (
        <main>
            <h1>MovieDetails</h1>
                    return (
                        <ProductItem
                        id={i}
                        item={product} />
                    );
                )
        </main>
    );
}

export default ProductItem;