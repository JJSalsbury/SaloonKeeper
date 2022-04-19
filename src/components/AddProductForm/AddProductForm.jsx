import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const newProductForm = () => {
    const dispatch = useDispatch();

    //Initial state is an OBJECT, with keys id and name
    let [newProduct, setProduct] = useState({ name: '', amount: '', amount_type: '', size: '', type:'', par: '', image: '', expected_amount: ''});

    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, name: event.target.value })
    }

    const handleAmountChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, amount: event.target.value })
    }

    const handleAmountTypeChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, amount_type: event.target.value })
    }

    const handleSizeChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, size: event.target.value })
    }

    const handleTypeChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, type: event.target.value })
    }

    const handleParChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, par: event.target.value })
    }

    const handleImageChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, image: event.target.value })
    }

    const handleExpectedAmountChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setProduct({ ...newProduct, expected_amount: event.target.value })
    }

    const addNewProduct = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
        //updates the next plant to have a new id
        setProduct({ name: '', amount: '', amount_type: '', size: '', type:'', par: '', image: '', expected_amount: ''});
    }
    return (
        <div>
            <h3>Add New Product Form</h3>
            {/* <pre>{JSON.stringify(newProduct)}</pre> */}
            <form onSubmit={addNewProduct}>
                <input type='text' placeholder='name' value={newProduct.name} onChange={handleNameChange}/>
                <input type='text' placeholder='amount' value={newProduct.amount} onChange={handleAmountChange}/>
                <input type='text' placeholder='amount type' value={newProduct.amount_type} onChange={handleAmountTypeChange}/>
                <input type='text' placeholder='size' value={newProduct.size} onChange={handleSizeChange}/>
                <input type='text' placeholder='type' value={newProduct.type} onChange={handleTypeChange}/>
                <input type='text' placeholder='par' value={newProduct.par} onChange={handleParChange}/>
                <input type='text' placeholder='image' value={newProduct.image} onChange={handleImageChange}/>
                <input type='text' placeholder='expected amount' value={newProduct.expected_amount} onChange={handleExpectedAmountChange}/>
                <input type='submit' value='Add New Product' />
            </form>
        </div>
    );
}


export default newProductForm;