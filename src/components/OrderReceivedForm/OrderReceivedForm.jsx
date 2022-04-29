import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const OrderReceivedForm = ({count}) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();

    const itemToCount = useSelector(store => store.inventoryReducer);

    console.log('OrderReceivedForm.jsx: itemToCount:', itemToCount);

    //Initial state is an OBJECT, with keys id and name
     
     const [productName, setProductName] = useState(itemToCount.name);
     const [currentCount, setCurrentCount] = useState(itemToCount.current_count);
     const [createDate, setCreateDate] = useState(itemToCount.create_date);
  
        
    const addCount = (event) => {
        event.preventDefault();
        // console.log('counted Item:', countedItem);
       
        const countedItem = {
            name: productName,
            product_id: id,
            create_date: createDate,
            current_count: currentCount

        }

        console.log('count Item:', countedItem);
        dispatch({ type: 'ADD_ORDER', payload:  countedItem  });
        setProductName('');
        setCurrentCount('');
        setCreateDate('');

        swal({
            title: "You've UPDATED a received order!",
            text: "This product is now available on the Count Page.",
            icon: "success",
            button: "See Count Page",
          });

        history.push('/count');
    }
    

    return (
        <div>
            <h3>Order Received</h3>
            {/* <pre>{JSON.stringify(newProduct)}</pre> */}
            <p>{count}</p>
            <p>Product Id: {itemToCount.id}</p>
            <p>Product Name: {itemToCount.name}</p>
            <p>Expected Amount: {itemToCount.expected_amount}</p>
            <form onSubmit={addCount}>
                <input type='text' placeholder='received amount' value={itemToCount.current_count} onChange={(event) => setCurrentCount(event.target.value)}/>
                <input type='date' placeholder='create date' value={itemToCount.create_date} onChange={(event) => setCreateDate(event.target.value)}/>
                <input type='submit' value='Add To Inventory' />
            </form>
        </div>
    );
}

export default OrderReceivedForm;