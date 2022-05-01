import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import swal from 'sweetalert';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';


function EditProductForm() {
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const editItem = useSelector(store => store.editReducer);
    // console.log('editProductForm.jsx: editItem:', editItem);
    console.log('editItem:', editItem);

    const [name, setName] = useState(editItem.name);
    const [amount, setAmount] = useState(editItem.amount);
    const [unit, setUnit] = useState(editItem.unit_type);
    const [type, setType] = useState(editItem.type);
    const [par, setPar] = useState(editItem.par);
    const [expectedAmount, setExpectedAmount] = useState(editItem.expected_amount);

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                // width: '125ch',
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
    
    // send updated product data to database
    const editProduct = (event) => {
        event.preventDefault();
        console.log('edit Item:', editItem);

        const editedProduct = {
            id: id,
            name: name,
            amount: amount,
            unit_type: unit,
            type: type,
            par: par,
            expected_amount: expectedAmount

        }

        console.log('EditProductForm.jsx: editedProduct:', editedProduct);
        dispatch({ type: 'EDIT_PRODUCT', payload: { id: id, product: editedProduct } });
        setName('');
        setAmount('');
        setUnit('');
        setType('');
        setPar('');
        setExpectedAmount('');

        swal({
            title: "Product Added!",
            text: "This product has been SUCCESSFULLY updated in the Product Inventory List!",
            icon: "success",
            button: "Back To List",
        });

        returnToList();
    }

    const returnToList = () => {
        history.push('/product');
    }

    return (
            <div>
                
                    <h1>Edit Product</h1>
                    <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
                    <p>{editItem.name}</p>
                    <p>AMOUNT: {editItem.amount}{editItem.unit_type}</p>
                    <p>TYPE: {editItem.type}</p>
                    <p>PAR: {editItem.par}</p>
                    <p>EXPECTED AMOUNT: {editItem.expected_amount}</p>
                

                <form onSubmit={editProduct}>
                    <input type='text' placeholder={name} value={name} onChange={(event) => setName(event.target.value)} />
                    <input type='text' placeholder={amount} value={amount} onChange={(event) => setAmount(event.target.value)} />
                    <input type='text' placeholder={unit} value={unit} onChange={(event) => setUnit(event.target.value)} />
                    <input type='text' placeholder={type} value={type} onChange={(event) => setType(event.target.value)} />
                    <input type='text' placeholder={par} value={par} onChange={(event) => setPar(event.target.value)} />
                    <input type='text' placeholder={expectedAmount} value={expectedAmount} onChange={(event) => setExpectedAmount(event.target.value)} />
                    <input type='submit' value='Update Product' />
                    <button onClick={returnToList}>Cancel Edit</button>
                </form>
            </div>
    )
}

export default EditProductForm;