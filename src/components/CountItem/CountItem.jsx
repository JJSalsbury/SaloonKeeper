import { useDispatch, useSelector } from 'react-redux';
// import editCountForm from '../EditCountForm/EditCountForm';
import { useHistory } from 'react-router-dom';
import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import swal from 'sweetalert';
import { Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
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

function CountItem({count}) { //item coming from .map on CountList 

    const product = useSelector(store => store.productReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // const user = useSelector(store => store.user);
    // console.log('CountItem component:', count);

    const handleDelete = () => {
        // swal("This product has been removed from the inventory has been deleted")
        dispatch({ type: 'DELETE_COUNT', payload: count.id }) //sends item id to saga with delete request
          
    }

    // // const handleClick = () => {
    // //     dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    // // }

    const newCount = () => {
        dispatch({ type: 'START_COUNT', payload: count})
        console.log('editCount func');
        history.push(`/addcount/${count.id}`);
    }

    return (

                <StyledTableRow>
                    <StyledTableCell align="center">{count.product_id}</StyledTableCell>
                    <StyledTableCell align="center">{count.name}</StyledTableCell>
                    <StyledTableCell align="center">{count.user_id}</StyledTableCell>
                    <StyledTableCell align="center">{count.current_count}</StyledTableCell>
                    <StyledTableCell align="center">{count.create_date}</StyledTableCell>
                    <StyledTableCell align="center"><button onClick={newCount}><LibraryAddCheckIcon color="primary"/></button></StyledTableCell>
                    <StyledTableCell align="center"><button onClick={handleDelete}><DeleteTwoTone /></button></StyledTableCell>
                </StyledTableRow>

    );
}

export default CountItem;