import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import swal from 'sweetalert';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
        },
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[600]),
      backgroundColor: yellow[600],
      '&:hover': {
        backgroundColor: yellow[600],
      },
    },
  }))(Button);

const addProductForm = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    // console.log('AddProductForm component:', product);

    //FOR PRESENTATION-  set initial state to dummy entry to hit submit, no input needed
    //Initial state is an OBJECT, with keys id and name
    let [newProduct, setProduct] = useState({ name: '', amount: '',  unit_type: '', type: '', par: '', image: '', expected_amount: '' });

    const handleNameChange = (event) => {
        setProduct({ ...newProduct, name: event.target.value })
    }

    const handleAmountChange = (event) => {
        setProduct({ ...newProduct, amount: event.target.value })
    }

    const handleUnitChange = (event) => {
        setProduct({ ...newProduct, unit_type: event.target.value })
    }

    const handleTypeChange = (event) => {
        setProduct({ ...newProduct, type: event.target.value })
    }

    const handleParChange = (event) => {
        setProduct({ ...newProduct, par: event.target.value })
    }

    const handleImageChange = (event) => {
        setProduct({ ...newProduct, image: event.target.value })
    }

    const handleExpectedAmountChange = (event) => {
        setProduct({ ...newProduct, expected_amount: event.target.value })
    }


    
    const addProduct = (event) => {
        event.preventDefault();

        //updates the next product to have a new id
        if ( newProduct.name !== '' && newProduct.amount !== '' && newProduct.unit_type !== '' && newProduct.type !== '' && newProduct.par !== '' && newProduct.image !== '' && newProduct.expected_amount !== '') {
        swal({
            title: "Product Added!",
            text: "This product has been SUCCESSFULLY added to the Product Inventory List!",
            icon: "success",
            button: "Back To List",
        });
        {dispatch({ type: 'ADD_PRODUCT', payload: newProduct })};
        history.push('/product') 
    } else { 
        swal("Your product has NOT been added from the Product Inventory List. Please enter all fields or type 'none'.");
        setProduct({ name: '', amount: '', unit_type: '', type: '', par: '', image: '', expected_amount: '' });     
    };
    }

    const quickAddInfo = () => {
        setProduct({ name: 'Jack Daniels', amount: '750ml', unit_type: 'bottle', type: 'whiskey', par: '250', image: 'https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', expected_amount: '250' }); 
    }

    return (
        <div>
            <Container maxWidth="md">
            <div className="pageTitle">
                <h1>Add New Product Form</h1>
                {/* <pre>{JSON.stringify(newProduct)}</pre> */}
                <img src="images/SaloonKeeperLogo1024_1.png" className="icon" onClick={quickAddInfo}/>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={addProduct}>


                <TextField
                required
                    id="filled-required"
                    label="ex. Jameson Irish Whiskey"
                    helperText="Product Name"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.name} onChange={handleNameChange} />

                <TextField
                required
                    id="filled-required"
                    helperText="Product Unit/Volume"
                    label="ex. 750 ml"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.amount} onChange={handleAmountChange} />

                <TextField
                required
                    id="filled-required"
                    helperText="Product Unit Type"
                    label="ex. cans, bottles"
                    // type="number"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.unit_type} onChange={handleUnitChange} />
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
                required
                    id="filled-required"
                    helperText="Product Type"
                    label="ex. whiskey, vodka, beer"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.type} onChange={handleTypeChange} />

                <TextField
                required
                    id="filled-required"
                    helperText="PAR"
                    label="ex. 350"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.par} onChange={handleParChange} />

                <TextField
                required
                    id="filled-required"
                    helperText="Quantity Ordered"
                    label="ex. 355"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.expected_amount} onChange={handleExpectedAmountChange} />

                <TextField
                required
                    id="filled-required" 
                    label="ex. https//.image.jpeg"
                    helperText="Image Url"
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.image} onChange={handleImageChange} />



                {/* <input type='text' placeholder='amount type' value={newProduct.amount_type} onChange={handleAmountTypeChange} /> */}
                {/* <input type='text' placeholder='unit_type' value={newProduct.unit_type} onChange={handleUnitChange} /> */}
                {/* <input type='text' placeholder='type' value={newProduct.type} onChange={handleTypeChange} /> */}
                {/* <input type='text' placeholder='par' value={newProduct.par} onChange={handleParChange} />
                <input type='text' placeholder='image' value={newProduct.image} onChange={handleImageChange} />
                <input type='text' placeholder='expected amount' value={newProduct.expected_amount} onChange={handleExpectedAmountChange} /> */}
                <ColorButton variant="contained" color="primary" type="submit">Add New Product</ColorButton>
            </form>
            </Container>
        </div>
    );
}


export default addProductForm;