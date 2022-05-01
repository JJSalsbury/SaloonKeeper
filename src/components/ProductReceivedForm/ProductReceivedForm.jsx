import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { yellow } from '@material-ui/core/colors';
import { Paper } from '@material-ui/core';
import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './ProductReceivedForm.css';


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(yellow[600]),
        backgroundColor: yellow[600],
        '&:hover': {
            backgroundColor: yellow[600],
        },
    },
}))(Button);

const ProductReceivedForm = ({ count }) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();

    const itemToCount = useSelector(store => store.inventoryReducer);

    console.log('OrderReceivedForm.jsx: itemToCount:', itemToCount);

    //Initial state is an OBJECT, with keys id and name

    const [productName, setProductName] = useState(itemToCount.name);
    const [currentCount, setCurrentCount] = useState(itemToCount.current_count);
    const [createDate, setCreateDate] = useState(itemToCount.create_date);
    const [orderReceived, setOrderReceived] = useState(itemToCount.product_ordered);


    const addToCount = (event) => {
        event.preventDefault();
        // console.log('counted Item:', receivedProduct);

        const receivedProduct = {
            name: productName,
            product_id: id,
            create_date: createDate,
            current_count: currentCount,
            product_ordered: orderReceived

        }

        console.log('PRODUCT RECEIVED FORM: receivedProduct:', receivedProduct);
        dispatch({ type: 'ADD_ORDER', payload: receivedProduct });
        setProductName('');
        setCurrentCount('');
        setCreateDate('');
        setOrderReceived('TRUE');

        swal({
            title: "You've UPDATED a received order!",
            text: "This product is now available on the Count Page.",
            icon: "success",
            button: "See Count Page",
        });

        history.push('/product')
    }

    const returnToList = () => {
        history.push('/product');
    }

    return (
        <div>
        <div className="orderReceived">
            <h1>Initial Stock Received</h1>
            <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
        </div>
        <Container component={Paper} maxWidth="sm">
        <div className="orderItem">
            <p>{count}</p>
            <p>Product Id: {itemToCount.id}</p>
            <p>Product Name: {itemToCount.name}</p>
            <p>Expected Amount: {itemToCount.expected_amount}</p>
            </div>
            <form className="orderItem" onSubmit={addToCount}>
                <input type='text' placeholder='received amount' value={itemToCount.current_count} onChange={(event) => setCurrentCount(event.target.value)}/>
                <input type='date' placeholder='create date' value={itemToCount.create_date} onChange={(event) => setCreateDate(event.target.value)}/>
                <div className="orderItem">
                <ColorButton variant="contained" color="primary" type="submit">Add Product</ColorButton>
                </div>
                <ColorButton type={returnToList} variant="contained" color="secondary">Cancel Add Product</ColorButton>
                </form>
            </Container>

        </div>
    );
}

export default ProductReceivedForm;