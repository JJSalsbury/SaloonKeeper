import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function editProductForm() {
    const id = useParams().id;

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCT', payload: id });
    }, []);

    // const productDetails = useSelector(store => store.productReducer);
    const editItem = useSelector(store => store.editReducer);
    // console.log('productDetails:', productDetails);
    console.log('editItem:', editItem);

    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState(editItem.name);
    const [amount, setAmount] = useState(editItem.amount);
    const [amountType, setAmountType] = useState(editItem.amount_type);
    const [type, setType] = useState(editItem.type);
    const [par, setPar] = useState(editItem.par);
    const [expectedAmount, setExpectedAmount] = useState(editItem.expected_amount);
    // const [genreId, setGenreId] = useState('');

    // send updated product data to database
    const editProduct = (event) => {
        event.preventDefault();
        console.log('edit Item:', editItem);

        const editedProduct = {
            id: id,
            name: name,
            amount: amount,
            amount_type: amountType,
            type: type,
            par: par,
            expected_amount: expectedAmount

        }

        console.log('handleSubmit func newProduct:', editedProduct);
        dispatch({ type: 'EDIT_PRODUCT', payload: { id: id, product: editedProduct } });
        setName('');
        setAmount('');
        setAmountType('');
        setType('');
        setPar('');
        setExpectedAmount('');

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
                    <p>AMOUNT: {editItem.amount}{editItem.amount_type}</p>
                    <p>TYPE: {editItem.type}</p>
                    <p>PAR: {editItem.par}</p>
                    <p>EXPECTED AMOUNT: {editItem.expected_amount}</p>
                </section>

                <form onSubmit={editProduct}>
                    <input type='text' placeholder={name} value={name} onChange={(event) => setName(event.target.value)} />
                    <input type='text' placeholder={amount} value={amount} onChange={(event) => setAmount(event.target.value)} />
                    <input type='text' placeholder={amountType} value={amountType} onChange={(event) => setAmountType(event.target.value)} />
                    <input type='text' placeholder={type} value={type} onChange={(event) => setType(event.target.value)} />
                    <input type='text' placeholder={par} value={par} onChange={(event) => setPar(event.target.value)} />
                    <input type='text' placeholder={expectedAmount} value={expectedAmount} onChange={(event) => setExpectedAmount(event.target.value)} />
                    <input type='submit' value='Update Product' />
                    <button onClick={returnToList}>Product Inventory List</button>
                </form>
            </div>
        </>
    )
}

export default editProductForm;