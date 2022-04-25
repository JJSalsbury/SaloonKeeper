import { useDispatch, useSelector } from 'react-redux';
// import editCountForm from '../EditCountForm/EditCountForm';
import { useHistory } from 'react-router-dom';

function CountItem({count}) { //item coming from .map on CountList 

    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector(store => store.user);
    console.log('CountItem component:', count);

    const handleDelete = () => {
        dispatch({ type: 'DELETE_COUNT', payload: count.id }) //sends item id to saga with delete request
    }

    // const handleClick = () => {
    //     dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    // }

    const editCount = () => {
        dispatch({ type: 'EDIT_COUNT', payload: count.id})
        console.log('editCount func');
        history.push(`/editcount/${count.id}`);
    }


    return (
        <>
        <main>
            <h1>Count Details</h1>
                <div key={count.id} >
                <h3>Counted By: {count.user_id}</h3>
                <p>Item Counted: {count.product_id}</p>               
                <p>Current Count: {count.current_count}</p>
                <p>Count Date: <Date>{count.create_date}</Date></p>
                <button onClick={handleDelete}>Delete Count</button>
                <button onClick={editCount}>Edit Count</button>
            </div>
        </main>
        </>
    );
}

export default CountItem;