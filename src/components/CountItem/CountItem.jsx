import { useDispatch, useSelector } from 'react-redux';
// import editCountForm from '../EditCountForm/EditCountForm';
import { useHistory } from 'react-router-dom';

function CountItem({count}) { //item coming from .map on CountList 


    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector(store => store.user);
    // console.log('CountItem component:', count);

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: count.id }) //sends item id to saga with delete request
    }

    // const handleClick = () => {
    //     dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    // }

    const newCount = () => {
        dispatch({ type: 'START_COUNT', payload: count})
        console.log('editCount func');
        history.push(`/addcount/${count.id}`);
    }


    return (
        <main key={count.id} >
            <h1>Count Details</h1>
                <div >
                <p>Product Id: {count.id}</p>
                <h3>Counted By: {count.user_id}</h3>
                <p>Item Counted: {count.product_id}</p>               
                <p>Current Count: {count.current_count}</p>
                <p>Count Date: {count.create_date}</p>
                <button onClick={handleDelete}>Delete Count</button>
                <button onClick={newCount}>Start New Count</button>
            </div>
        </main>
    );
}

export default CountItem;