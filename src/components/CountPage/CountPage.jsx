import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import newCountForm from '../newCountForm/newCountForm';
import CountItem from '../CountItem/CountItem';
import AddCountForm from '../AddCountForm/AddCountForm';
import { useHistory } from 'react-router-dom';


function CountPage() {

    const dispatch = useDispatch();
    const countList = useSelector(store => store.setCountReducer);
    // const product = useSelector(store => store.productReducer);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_COUNT' });
    }, []);

    const addCount = () => {
        console.log('addCount clicked');
        history.push(`/addCount`);
    }

    // console.log('countPage - countReducer/productReducer:', countList, product);

    return (
        <>
        <main>
            <h1>Count List</h1>
            <button onClick={addCount}>Add Count</button>
            <section className="count">
                {countList.map((count, i) => {
                    return (
                        <CountItem
                            key={i}
                            count={count} />
                    );
                })}              
            </section>
            
        </main>
        </>
    )
}

export default CountPage;