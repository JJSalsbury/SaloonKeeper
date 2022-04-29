import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountItem from '../CountItem/CountItem';
import { useHistory } from 'react-router-dom';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './CountPage.css'; 



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
})


function CountPage() {

    const dispatch = useDispatch();
    const countList = useSelector(store => store.setCountReducer);
    // const product = useSelector(store => store.productReducer);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'GET_COUNT' });
    }, []);


    // console.log('countPage - countReducer/productReducer:', countList, product);

    return (
        <main>
            <div className="pageTitle">
            <h1>Product Count Page</h1>
            <img src="images/SaloonKeeperLogo1024_1.png" className="icon" />
            </div>
            <section className="count">
            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell align="center">Product Id</StyledTableCell>
                    <StyledTableCell align="center">Product Name</StyledTableCell>
                    <StyledTableCell align="center">Counted By</StyledTableCell>
                    <StyledTableCell align="center">Current Count</StyledTableCell>
                    <StyledTableCell align="center">Count Date</StyledTableCell>
                    <StyledTableCell align="center">Start New Count</StyledTableCell>
                    <StyledTableCell align="center">Delete Count</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
            {countList.map((count, i) => {
                    return (
                        <CountItem
                            key={i}
                            count={count} />
                    );
                })}  
            </TableBody>
            </Table>
            </TableContainer>
            
            </section>
            
        </main>
    )
}

export default CountPage;