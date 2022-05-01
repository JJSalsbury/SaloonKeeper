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
import './EditProductForm.css';


function EditProductForm() {
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();
    // const classes = useStyles();

    const editItem = useSelector(store => store.editReducer);
    // console.log('editProductForm.jsx: editItem:', editItem);
    console.log('editItem:', editItem);

    const [name, setName] = useState(editItem.name);
    const [amount, setAmount] = useState(editItem.amount);
    const [unit, setUnit] = useState(editItem.unit_type);
    const [type, setType] = useState(editItem.type);
    const [par, setPar] = useState(editItem.par);
    const [expectedAmount, setExpectedAmount] = useState(editItem.expected_amount);
    const [image, setImage] = useState(editItem.image);


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
            expected_amount: expectedAmount,
            image: image

        }

        console.log('EditProductForm.jsx: editedProduct:', editedProduct);
        dispatch({ type: 'EDIT_PRODUCT', payload: { id: id, product: editedProduct } });
        setName('');
        setAmount('');
        setUnit('');
        setType('');
        setPar('');
        setExpectedAmount('');
        setImage('');

        swal({
            title: "Product Added!",
            text: "This product has been SUCCESSFULLY updated in the Product Inventory List!",
            icon: "success",
            button: "Back To List",
        });

       
    }



    return (
        <div>
            <div className="editPageTitle">
                <h1>Edit Product</h1>
                <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
            </div>
            <Container component={Paper} maxWidth="sm">
                <div className="countItem">
                    <p>{editItem.name}</p>
                    <img className="imageItem" src={editItem.image} />
                    <p>AMOUNT: {editItem.amount} {editItem.unit_type}</p>
                    <p>TYPE: {editItem.type}</p>
                    <p>PAR: {editItem.par}</p>
                    <p>EXPECTED AMOUNT: {editItem.expected_amount}</p>
                </div>
                <form className="editProduct" onSubmit={editProduct}>
                    <input type='text' placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                    <input type='text' placeholder="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
                    <input type='text' placeholder="unit" value={unit} onChange={(event) => setUnit(event.target.value)} />
                    <input type='text' placeholder="product type" value={type} onChange={(event) => setType(event.target.value)} />
                    <input type='text' placeholder="PAR" value={par} onChange={(event) => setPar(event.target.value)} />
                    <input type='text' placeholder="expected amount" value={expectedAmount} onChange={(event) => setExpectedAmount(event.target.value)} />
                    <input type='text' placeholder="image" value={image} onChange={(event) => setImage(event.target.value)} />
                    <ColorButton className="editBtn" type="submit" variant="contained" color="primary">Edit Product</ColorButton>
                </form>
            </Container>
        </div>
    )
}

export default EditProductForm;