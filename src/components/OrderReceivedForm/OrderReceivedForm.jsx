import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';


import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const OrderReceivedForm = ({count}) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();

    const itemToCount = useSelector(store => store.inventoryReducer);

    // console.log('Count:', count);
    // console.log('Item To Count:', itemToCount);

    //Initial state is an OBJECT, with keys id and name
    // const [productId, setProductId] = useState(itemToCount.product_id);
     const [currentCount, setCurrentCount] = useState(itemToCount.current_count);
     const [createDate, setCreateDate] = useState(itemToCount.create_date);
    //  const [userId] = useState(countedItem.id);
        


    const addCount = (event) => {
        event.preventDefault();
        console.log('counted Item:', countedItem);
       
        const countedItem = {
            // id: ,
            // user_id: ,
            product_id: id,
            create_date: createDate,
            current_count: currentCount

        }

        console.log('addCountButton new counted Item:', countedItem);
        dispatch({ type: 'ADD_ORDER', payload:  countedItem  });
        // dispatch({ type: 'ADD_COUNT', payload: { count: countedItem } });
        // setProductId('');
        setCurrentCount('');
        setCreateDate('');

        // returnToList();
        history.push('/count');
    }

    return (
        <div>
            <h3>Order Received</h3>
            {/* <pre>{JSON.stringify(newProduct)}</pre> */}
            <p>{count}</p>
            <p>Product Id: {itemToCount.id}</p>
            <p>Product Name: {itemToCount.name}</p>
            <form onSubmit={addCount}>
                <input type='text' placeholder='count' value={itemToCount.current_count} onChange={(event) => setCurrentCount(event.target.value)}/>
                <input type='date' placeholder='create date' value={itemToCount.create_date} onChange={(event) => setCreateDate(event.target.value)}/>

                <input type='submit' value='Add To Inventory' />
            </form>
        </div>
    );
}


export default OrderReceivedForm;