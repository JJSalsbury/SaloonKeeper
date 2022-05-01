import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function EditProductForm() {
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();

    const editItem = useSelector(store => store.editReducer);
    // console.log('editProductForm.jsx: editItem:', editItem);
    console.log('editItem:', editItem);

    const [name, setName] = useState(editItem.name);
    const [amount, setAmount] = useState(editItem.amount);
    const [unit, setUnit] = useState(editItem.unit_type);
    const [type, setType] = useState(editItem.type);
    const [par, setPar] = useState(editItem.par);
    const [expectedAmount, setExpectedAmount] = useState(editItem.expected_amount);

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
        <>
            <div>
                <section className="editProduct">
                    <h3>Edit Product: {editItem.name}</h3>
                    <p>AMOUNT: {editItem.amount}{editItem.unit_type}</p>
                    <p>TYPE: {editItem.type}</p>
                    <p>PAR: {editItem.par}</p>
                    <p>EXPECTED AMOUNT: {editItem.expected_amount}</p>
                </section>

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
        </>
    )
}

export default EditProductForm;