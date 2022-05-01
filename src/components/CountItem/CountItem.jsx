import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import swal from 'sweetalert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 17,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
    },
})

function CountItem({ count }) { //item coming from .map on CountList 

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // const user = useSelector(store => store.user);
    // console.log('CountItem component:', count);

    const handleDelete = () => {

        //sends item id to saga with delete request
        swal({
            title: "Are you sure?",
            text: "Once deleted, this count record will be permanently removed from the Product Count.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("The count item has been SUCCESSFULLY deleted from the Product Count.", {
                        icon: "success",

                    });
                    { dispatch({ type: 'DELETE_COUNT', payload: count.product_id }) }
                } else {
                    swal("Your count has NOT been deleted from the Product Count.");
                }
            });

        history.push(`/count/`);
    }

    const newCount = () => {
        console.log('START COUNT BTN CLICKED');
        dispatch({ type: 'START_COUNT', payload: count })
        history.push(`/addcount/${count.id}`);
    }

    const evaluateUser = () => {
        if (user.access_level === 1) {
            return true
        } else {
            return false
        }
    }

    return (

        <StyledTableRow>
            <StyledTableCell align="center">{count.product_id}</StyledTableCell>
            <StyledTableCell align="center">{count.name}</StyledTableCell>
            <StyledTableCell align="center">{count.user_id}</StyledTableCell>
            <StyledTableCell align="center">{count.current_count}</StyledTableCell>
            <StyledTableCell align="center">{count.create_date}</StyledTableCell>
            <StyledTableCell align="center"><button onClick={newCount}>
                <LibraryAddCheckIcon color="primary" /></button></StyledTableCell>
            {evaluateUser() ?
                <StyledTableCell align="center"><button onClick={handleDelete}>
                    <DeleteTwoTone /></button></StyledTableCell> : <div></div>}
        </StyledTableRow>

    );
}

export default CountItem;