import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import newCountForm from '../newCountForm/newCountForm';
import CountItem from '../CountItem/CountItem';
import { useHistory } from 'react-router-dom';


function CountPage() {

    const dispatch = useDispatch();
    const count = useSelector(store => store.countReducer);
    const product = useSelector(store => store.productReducer);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_COUNT' });
    }, []);

    const addCount = () => {
        console.log('addCount clicked');
        history.push(`/addCount`);
    }

    console.log('In count Page:', count);

    return (
        <>
        <main>
            <h1>Count List</h1>
            <button onClick={addCount}>Add Count</button>
            <section className="count">
                {count.map((count, i) => {
                    return (
                        <CountItem
                            id={i}
                            count={count} />
                    );
                })}              
            </section>
            
        </main>
        </>
    )
}

export default CountPage;