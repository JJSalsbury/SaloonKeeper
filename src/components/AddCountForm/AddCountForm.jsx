import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const AddCountForm = ({count}) => {
    const id = useParams().id;

    const dispatch = useDispatch();
    const history = useHistory();

    const itemToCount = useSelector(store => store.setNewCountReducer);

    // console.log('Count:', count);
    console.log('Item To Count:', itemToCount);

    //Initial state is an OBJECT, with keys id and name
    // const [productId, setProductId] = useState(itemToCount.product_id);
    //  const [currentCount, setCurrentCount] = useState(itemToCount.current_count);
    //  const [createDate, setCreateDate] = useState(itemToCount.create_date);
    //  const [userId] = useState(countedItem.id);
        


    const addCount = (event) => {
        event.preventDefault();
        console.log('counted Item:', itemToCount);
       
        // const countedItem = {
        //     // id: ,
        //     // user_id: ,

        //     product_id: id,
        //     create_date: createDate,
        //     current_count: currentCount

        // }

        console.log('addCountButton new counted Item:', itemToCount);
        dispatch({ type: 'START_NEW_COUNT', payload:  { property: event.target.name, value: event.target.value}  });
        // dispatch({ type: 'ADD_COUNT', payload: { count: countedItem } });
        // setProductId('');
        // setCurrentCount('');
        // setCreateDate('');

        // returnToList();
        // history.push('/count');
    }

    function handleSubmit(event) {
        event.preventDefault();
        // PUT REQUEST to /students/:id
        axios.put(`/api/count/${itemToCount.id}`, itemToCount)
            .then( response => {
                // clean up reducer data            
                dispatch({ type: 'CLEAR_COUNT' });
                // refresh will happen with useEffect on Home
                // history.push('/'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })   
      };


    return (
        <div>
            <h3>Add To Count</h3>
            {/* <pre>{JSON.stringify(newProduct)}</pre> */}
            <p>Product Id: {itemToCount.product_id}</p>
            <p>Product Name: {itemToCount.name}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => addCount(event)} name="current_count" type='text' placeholder='count' value={itemToCount.current_count} />
                <input onChange={(event) => addCount(event)} name="create_date" type='date' placeholder='create date' value={itemToCount.create_date}/>

                <input type='submit' value='Add To Inventory' />
            </form>
        </div>
    );
}


export default AddCountForm;