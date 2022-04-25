import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';


import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const AddCountForm = ({count}) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();

    const itemToCount = useSelector(store => store.countReducer);

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
        dispatch({ type: 'ADD_COUNT', payload:  countedItem  });
        // dispatch({ type: 'ADD_COUNT', payload: { count: countedItem } });
        // setProductId('');
        setCurrentCount('');
        setCreateDate('');

        // returnToList();
        history.push('/count');
    }

    // const handleCreateDate = (event) => {
    //     // console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setCount({ ...newCount, create_date: event.target.value })
    // }

    // const handleAmountTypeChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, amount_type: event.target.value })
    // }

    // const handleSizeChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, size: event.target.value })
    // }

    // const handleTypeChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, type: event.target.value })
    // }

    // const handleParChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, par: event.target.value })
    // }

    // const handleImageChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, image: event.target.value })
    // }

    // const handleExpectedAmountChange = (event) => {
    //     console.log('event happened');
    //     //Similar to in redux -- we dont want to get rid of the id field when we update name
    //     setProduct({ ...newProduct, expected_amount: event.target.value })
    // }

    // const addCount = (event) => {
    //     event.preventDefault();
    //     // dispatch({ type: 'ADD_COUNT', payload: newCount });
    //     dispatch({ type: 'ADD_COUNT', payload: { id:id, count: countedItem }});
    //     //updates the next product to have a new id
    //     setCount({ current_count: '', create_date: ''});
    //     history.push('/count')
    // }
    return (
        <div>
            <h3>Add New Count Form</h3>
            {/* <pre>{JSON.stringify(newProduct)}</pre> */}
            <p>{count}</p>
            <p>Product Id: {itemToCount.id}</p>
            <p>Product Name: {itemToCount.name}</p>
            <form onSubmit={addCount}>
                <input type='text' placeholder='count' value={itemToCount.current_count} onChange={(event) => setCurrentCount(event.target.value)}/>
                <input type='date' placeholder='create date' value={itemToCount.create_date} onChange={(event) => setCreateDate(event.target.value)}/>

                <input type='submit' value='Add New Count' />
            </form>
        </div>
    );
}


export default AddCountForm;