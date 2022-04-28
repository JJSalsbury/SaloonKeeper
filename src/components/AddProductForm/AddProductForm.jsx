import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import swal from 'sweetalert';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const addProductForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    //Initial state is an OBJECT, with keys id and name
    let [newProduct, setProduct] = useState({ name: '', amount: '', size: '', type: '', par: '', image: '', expected_amount: '' });

    const handleNameChange = (event) => {
        setProduct({ ...newProduct, name: event.target.value })
    }

    const handleAmountChange = (event) => {
        setProduct({ ...newProduct, amount: event.target.value })
    }

    const handleSizeChange = (event) => {
        setProduct({ ...newProduct, size: event.target.value })
    }

    const handleTypeChange = (event) => {
        setProduct({ ...newProduct, type: event.target.value })
    }

    const handleParChange = (event) => {
        setProduct({ ...newProduct, par: event.target.value })
    }

    // const handleImageChange = (event) => {
    //     setProduct({ ...newProduct, image: event.target.value })
    // }

    const handleExpectedAmountChange = (event) => {
        setProduct({ ...newProduct, expected_amount: event.target.value })
    }

    const addProduct = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
        //updates the next product to have a new id
        setProduct({ name: '', amount: '', size: '', type: '', par: '', image: '', expected_amount: '' });

        swal({
            title: "Product Added!",
            text: "You added a new product to the Product Inventory List!",
            icon: "success",
            button: "Back To List",
        });

        history.push('/product')
    }
    return (
        <div>
            <div className="pageTitle">
                <h1>Add New Product Form</h1>
                {/* <pre>{JSON.stringify(newProduct)}</pre> */}
                <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={addProduct}>

                <TextField
                    id="filled-helperText"
                    helperText="Set Product Name"
                    label="Product Name"
                    variant="filled"
                    value={newProduct.name} onChange={handleNameChange} />

                <TextField
                    id="filled-helperText"
                    helperText="Set Product Amount"
                    label="Number"
                    variant="filled"
                    value={newProduct.size} onChange={handleSizeChange} />

                <TextField
                    id="filled-number"
                    helperText="Set Product Volume"
                    label="Unit/Volume"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    value={newProduct.amount} onChange={handleAmountChange} />
                {/* 
                    <FormControl style={{minWidth: 150}}>
                    <InputLabel id='InputLabel'>Amount Type</InputLabel>
                    <Select value= {newProduct.type} defaultValue={0} required name='amount type' id="amount type" variant="filled" onChange={handleTypeChange}>
                        <MenuItem value={0}>Vodka</MenuItem>
                        <MenuItem value={1}>Whiskey</MenuItem>
                        <MenuItem value='2'>Tequila</MenuItem>
                        <MenuItem value='3'>Rum</MenuItem>
                        <MenuItem value='4'>Gin</MenuItem>
                        <MenuItem value='5'>Cordial</MenuItem>
                        <MenuItem value='6'>Beer</MenuItem>
                        <MenuItem value='7'>Wine</MenuItem>
                    </Select>
                </FormControl> */}

                <TextField
                    id="filled-helperText"
                    helperText="Type"
                    label="Product Type"
                    variant="filled"
                    value={newProduct.type} onChange={handleTypeChange} />

                <TextField
                    id="filled-helperText"
                    helperText="Set PAR"
                    label="PAR"
                    variant="filled"
                    value={newProduct.par} onChange={handleParChange} />

                <TextField
                    id="filled-helperText"
                    helperText="Set Amount Expected"
                    label="Ordered Amount"
                    variant="filled"
                    value={newProduct.expected_amount} onChange={handleExpectedAmountChange} />

                {/* <TextField
                    id="filled-helperText"
                    helperText="Image Url"
                    label="Image Url"
                    variant="filled"
                    value={newProduct.image} onChange={handleImageChange} /> */}



                {/* <input type='text' placeholder='amount type' value={newProduct.amount_type} onChange={handleAmountTypeChange} /> */}
                {/* <input type='text' placeholder='size' value={newProduct.size} onChange={handleSizeChange} /> */}
                {/* <input type='text' placeholder='type' value={newProduct.type} onChange={handleTypeChange} /> */}
                {/* <input type='text' placeholder='par' value={newProduct.par} onChange={handleParChange} />
                <input type='text' placeholder='image' value={newProduct.image} onChange={handleImageChange} />
                <input type='text' placeholder='expected amount' value={newProduct.expected_amount} onChange={handleExpectedAmountChange} /> */}
                <input type='submit' value='Add New Product' />
            </form>
        </div>
    );
}


export default addProductForm;