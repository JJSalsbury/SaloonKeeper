import { useDispatch, useSelector } from 'react-redux';


function ProductItem({ item }) { //item coming from .map on ShelfPage 

    const dispatch = useDispatch();
    console.log(item);


    return (
        <main>
            <h1>MovieDetails</h1>
                    return (
                        <ProductItem
                        id={i}
                        item={item} />
                    );
                )
        </main>
    );
}

export default ProductItem;