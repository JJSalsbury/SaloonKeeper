import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import swal from 'sweetalert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
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
    const user = useSelector(store => store.user);
    // console.log('ProductItem component:', product);

    //sends item id to saga with delete request
    const handleDelete = () => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, this product will be permanently removed from the Product Inventory List and from the Product Count.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("The product item has been SUCCESSFULLY deleted from the Product Inventory List. And removed from the Product Count!", {
                        icon: "success",

                    });
                    { dispatch({ type: 'DELETE_ITEM', payload: product.id }) }
                } else {
                    swal("Your product has NOT been deleted.");
                }
            });

        history.push('/product');
    }

    const editProduct = () => {
        dispatch({ type: 'EDIT_ITEM', payload: product })
        console.log('editProduct clicked');
        history.push(`/editproduct/${product.id}`)
    }

    const orderReceived = () => {
        dispatch({ type: 'ORDER_RECEIVED', payload: product })
        console.log('orderReceived clicked');
        history.push(`/addorder/${product.id}`)
    }

    const evaluateUser = () => {
        if (user.access_level === 1) {
            return true
        } else {
            return false
        }
    }

    return (

        <StyledTableRow className={classes.table}>
            <StyledTableCell align="center">{product.id}</StyledTableCell>
            <StyledTableCell align="center"><img className="imageItem" src={product.image} /></StyledTableCell>
            <StyledTableCell align="center">{product.name}</StyledTableCell>
            <StyledTableCell align="center">{product.amount} {product.unit_type}</StyledTableCell>
            <StyledTableCell align="center">{product.type}</StyledTableCell>
            <StyledTableCell align="center">{product.par}</StyledTableCell>
            <StyledTableCell align="center">{product.expected_amount}</StyledTableCell>
            {evaluateUser() ?
                <StyledTableCell align="center"><button onClick={handleDelete}>
                    <DeleteTwoTone /></button></StyledTableCell> : <div></div>}
            {evaluateUser() ?
                <StyledTableCell align="center"><button onClick={editProduct}>
                    <EditTwoTone /></button></StyledTableCell> : <div></div>}
            <StyledTableCell align="center">{product.product_ordered ?
                <button onClick={orderReceived}><LocalBar color="primary" /></button> :
                <button onClick={orderReceived}><LocalBar color="secondary" /></button>}</StyledTableCell>
        </StyledTableRow>
    );
}

export default ProductItem;