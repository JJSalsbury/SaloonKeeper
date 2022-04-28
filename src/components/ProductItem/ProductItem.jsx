import { useDispatch, useSelector } from 'react-redux';
import editProductForm from '../EditProductForm/EditProductForm';
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
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
// import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { DeleteTwoTone, EditTwoTone, LocalBar } from '@material-ui/icons';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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
});

function ProductItem({ product }) { //item coming from .map on ProductList 

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // const user = useSelector(store => store.user);
    console.log('ProductItem component:', product);

    //sends item id to saga with delete request
    const handleDelete = () => {

        dispatch({ type: 'DELETE_ITEM', payload: product.id })

        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will have to create a new product to add the the Product Inventory List.",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })
        //   .then((willDelete) => {
        //     if (willDelete) {
        //       swal("The product item has been deleted from the Product Inventory List.", {
        //         icon: "success",
        //       });
        //     } else {
        //       swal("Your product has NOT been deleted from the Product Inventory List.");
        //     }
        //   });
        history.push(`/product/`)
    }

    const editProduct = () => {
        dispatch({ type: 'EDIT_ITEM', payload: product })
        console.log('editProduct func');
        history.push(`/editproduct/${product.id}`)
    }

    const orderReceived = () => {
        dispatch({ type: 'ORDER_RECEIVED', payload: product })
        console.log('addCount clicked');
        history.push(`/addorder/${product.id}`)
    }

    return (

        <TableRow>
            <StyledTableCell align="center">{product.id}</StyledTableCell>
            <StyledTableCell align="center">{product.name}</StyledTableCell>
            <StyledTableCell align="center">{product.amount} {product.size}</StyledTableCell>
            <StyledTableCell align="center">{product.type}</StyledTableCell>
            <StyledTableCell align="center">{product.par}</StyledTableCell>
            <StyledTableCell align="center">{product.expected_amount}</StyledTableCell>
            <StyledTableCell align="center"><button onClick={handleDelete}><DeleteTwoTone/></button></StyledTableCell>
            <StyledTableCell align="center"><button onClick={editProduct}><EditTwoTone/></button></StyledTableCell>
            <StyledTableCell align="center"><button onClick={orderReceived}><LocalBar/></button></StyledTableCell>
        </TableRow>
    );
}

export default ProductItem;