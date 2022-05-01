import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import './AddCountForm.css';




const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(yellow[600]),
        backgroundColor: yellow[600],
        '&:hover': {
            backgroundColor: yellow[600],
        },
    },
}))(Button);

const AddCountForm = ({ count }) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();


    const itemToCount = useSelector(store => store.setNewCountReducer);

    // console.log('Count:', count);
    console.log('Item To Count:', itemToCount);

    const addCount = (event) => {
        // event.preventDefault();
        console.log('addCountButton new counted Item:', itemToCount);
        // dispatch({ type: 'START_NEW_COUNT', payload:  { property: event.target.name, value: event.target.value}  });
        dispatch({ type: 'START_NEW_COUNT', payload: { property: event.target.name, value: event.target.value } });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // PUT REQUEST to /count/:id
        axios.put(`/api/count/${itemToCount.id}`, itemToCount)
            .then(response => {
                // clean up reducer data            
                dispatch({ type: 'CLEAR_COUNT' });
                // refresh will happen with useEffect on Home
                // history.push('/'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })
        history.push('/count');
    }


    return (
        <div>
            <div className="countPageTitle">
                <h1>Add New Count</h1>
                <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
            </div>
            <Container component={Paper} maxWidth="sm">
                <div className="countItem">
                    <h3>Count Item</h3>
                    <p>Product Id: {itemToCount.product_id}</p>
                    <p>Product Name: {itemToCount.name}</p>
                </div>
                <form className="countItem" onSubmit={handleSubmit}>
                    <input onChange={(event) => addCount(event)} name="current_count" type='text' placeholder='count' value={itemToCount.current_count} />
                    <input onChange={(event) => addCount(event)} name="create_date" type='date' placeholder='create date' value={itemToCount.create_date} />
                    <div className="addCountBtn">
                        <ColorButton variant="contained" color="primary" type="submit">Add New Count</ColorButton>
                    </div>
                </form>
            </Container>
        </div>
    )
}


export default AddCountForm;