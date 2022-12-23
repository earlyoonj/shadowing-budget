import classes from './TransactionList.module.css';
import { Fragment } from 'react';
import TransactionItem from './TransactionItem';

function TransactionList(props) {
    return (
        <ul>
            {props.transactions.map((transaction) => {
                return <TransactionItem item={transaction} />;
            })}
            <div className={classes.space}></div>
        </ul>
    );
}

export default TransactionList;
