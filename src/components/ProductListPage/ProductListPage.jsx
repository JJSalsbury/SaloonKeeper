import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import './ProductListPage.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 20,
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


function ProductListPage() {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const productList = useSelector(store => store.productReducer);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'GET_PRODUCT' });
    }, []);

    const addProduct = () => {
        console.log('addProduct clicked');
        history.push(`/addproduct`);
    }

    const evaluateUser = () => {
        if (user.access_level === 1) {
            return true
        } else {
            return false
        }
    }

    return (
        <main>
            <Container component={Paper} maxWidth="lg">
                <div className="pageTitle">
                    <h1>Product Inventory List</h1>
                    <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
                    <button className="productBtn" onClick={addProduct}>Add New Product</button>
                </div>
                <section className="productTable">

                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center">Product Id</StyledTableCell>
                                <StyledTableCell align="center">Image</StyledTableCell>
                                <StyledTableCell align="center">Product Name</StyledTableCell>
                                <StyledTableCell align="center">Unit Amt/Type</StyledTableCell>
                                <StyledTableCell align="center">Product Type</StyledTableCell>
                                <StyledTableCell align="center">PAR</StyledTableCell>
                                <StyledTableCell align="center">Expected Amount</StyledTableCell>
                                {evaluateUser() ?
                                    <StyledTableCell align="center">Delete Product</StyledTableCell> : <div></div>}
                                {evaluateUser() ?
                                    <StyledTableCell align="center">Edit Product</StyledTableCell> : <div></div>}
                                <StyledTableCell align="center">Initial Stock</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map((product, i) => {
                                return (
                                    <ProductItem
                                        key={i}
                                        product={product} />
                                );
                            })}
                        </TableBody>
                    </Table>

                </section>
            </Container>
        </main>

    )
}

export default ProductListPage;