import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import swal from 'sweetalert';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import './AddProductForm.css';


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
        setProduct({ name: 'Black Box Cabernet', amount: '1.5 gallon', unit_type: 'box', type: 'wine', par: '5', image: 'https://products1.imgix.drizly.com/ci-black-box-cabernet-sauvignon-f898d964089ed965.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20', expected_amount: '5' }); 
    }

    return (
        <div>
            <Container component={Paper} maxWidth="md">
            <div className="pageTitle">
                <h1>Add New Product</h1>
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
                    variant="filled"
                    margin="dense"
                    fullWidth
                    value={newProduct.unit_type} onChange={handleUnitChange} />

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

                <div className="addProductBtn">
                <ColorButton  variant="contained" color="primary" type="submit">Add New Product</ColorButton>
                </div>
            </form>
            </Container>
        </div>
    );
}


export default addProductForm;