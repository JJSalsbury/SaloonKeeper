import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import React from 'react';
import swal from 'sweetalert';
import { Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DeleteTwoTone, EditTwoTone, LocalBar } from '@material-ui/icons';
import './ProductItem.css';


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
});

function ProductItem({ product }) { //item coming from .map on ProductList 

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // const user = useSelector(store => store.user);
    console.log('ProductItem component:', product);

    //sends item id to saga with delete request
    const handleDelete = () => {

        

        swal({
            title: "Are you sure?",
            text: "Once deleted, this product will be permanently removed from the Product Inventory List.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("The product item has been SUCCESSFULLY deleted from the Product Inventory List.", {
                icon: "success",
                
              });
              {dispatch({ type: 'DELETE_ITEM', payload: product.id })}
            } else {
              swal("Your product has NOT been deleted from the Product Inventory List.");
            }
          });
        
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

        <StyledTableRow className={classes.table}>
            <StyledTableCell align="center">{product.id}</StyledTableCell>
            <StyledTableCell align="center"><img className="imageItem" src={product.image} /></StyledTableCell>
            <StyledTableCell align="center">{product.name}</StyledTableCell>
            <StyledTableCell align="center">{product.amount} {product.size}</StyledTableCell>
            <StyledTableCell align="center">{product.type}</StyledTableCell>
            <StyledTableCell align="center">{product.par}</StyledTableCell>
            <StyledTableCell align="center">{product.expected_amount}</StyledTableCell>
            <StyledTableCell align="center"><button onClick={handleDelete}><DeleteTwoTone/></button></StyledTableCell>
            <StyledTableCell align="center"><button onClick={editProduct}><EditTwoTone /></button></StyledTableCell>
            <StyledTableCell align="center">{ product.product_ordered ? <button onClick={orderReceived}><LocalBar color="primary"/></button> : <button onClick={orderReceived}><LocalBar color="secondary"/></button>}</StyledTableCell>
        </StyledTableRow>
    );
}

export default ProductItem;