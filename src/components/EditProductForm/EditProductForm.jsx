import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function EditProduct() {
    const id = useParams().id;
    
    useEffect(() => {
        dispatch({type: 'GET_DETAILS', payload: id});
    }, []);

    const productDetails = useSelector(store => store.productReducer);
    console.log('productDetails:', productDetails);

    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState(productDetails.name);
    const [amount, setAmount] = useState(productDetails.amount);
    const [amountType, setAmountType] = useState(productDetails.amount_type);
    const [type, setType] = useState(productDetails.type);
    const [par, setPar] = useState(productDetails.par);
    const [expectedAmount, setExpectedAmount] = useState(productDetails.expected_amount);
    // const [genreId, setGenreId] = useState('');

    // send updated product data to database
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('title:', title);

        const editedProduct = {
            name: name,
            amount: amount,
            amount_type: amountType,
            type: type,
            par: par,
            expected_amount: expectedAmount

        }

        console.log('handleSubmit func newProduct:', editedProduct);
        dispatch({type: 'EDIT_PRODUCT', payload: {id: id, product: editedProduct}});
        setName('');
        setAmount('');
        setAmountType('');
        setType('');
        setPar('');
        setExpectedAmount('');

        Swal.fire('Updated product info')
        returnHome();
    }

    const returnHome = () => {
        console.log('returnHome func');
        history.push('/');
    }
    
    return (
        <>
        <Container maxWidth="sm">
            <Typography variant="h5">
                Edit Product
            </Typography>
        <form onSubmit={handleSubmit}>
            <TextField label="Title" variant="filled" value={title} sx={{ minWidth: 400 }} onChange={(event) => setTitle(event.target.value)}>
                <FilledInput id="title"/>
            </TextField>
            <FormControl>
            <TextField label="Description" value={description} multiline variant="filled" sx={{ minWidth: 600 }} onChange={(event) => setDescription(event.target.value)}>
                <FilledInput/>
            </TextField>
            </FormControl>
            <TextField label="Poster URL" variant="filled" sx={{ minWidth: 600 }} value={url} onChange={(event) => setUrl(event.target.value)}>
                <FilledInput/>
            </TextField>
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="select-genre">Genre</InputLabel>
                <Select
                labelId="select-genre"
                value={genreId}
                label="Genre"
                variant="filled"
                onChange={(event) => setGenreId(event.target.value)}
                >
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space-Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit">
                    Submit changes
            </Button>
            <Button onClick={returnHome}>
                <HomeIcon fontSize="large" sx={{ cursor: 'pointer' }}/>
            </Button>
        </form>
        </Container>
        </>
    )
}

export default EditProduct;