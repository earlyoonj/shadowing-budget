import { useState } from 'react';

import TransactionForm from '../Transaction/TransactionForm';
import TransactionList from '../Transaction/TransactionList';
import classes from './TransactionLayout.module.css';

function TransactionLayout(props) {
    const [isScheduled, setIsScheduled] = useState(false);
    const [isCurrent, setIsCurrent] = useState(true);
    const [isSpare, setIsSpare] = useState(true);
    const [scheduledTransactionsState, setScheduledTransactionsState] =
        useState([]);
    const [currentTransactionsState, setCurrentTransactionsState] = useState(
        []
    );

    const addTransactionHandler = (transaction) => {
        if (transaction.type === 'current') {
            setCurrentTransactionsState((prevTransactions) => {
                return [...prevTransactions, transaction];
            });
        } else {
            setScheduledTransactionsState((prevTransactions) => {
                return [...prevTransactions, transaction];
            });
        }
        props.onAddTransaction(transaction);
    };

    const clickScheduledHandler = () => {
        if (!isCurrent) {
            return;
        }

        if (isCurrent) {
            setIsScheduled(true);
            setIsCurrent(false);
        }
    };

    const clickCurrentHandler = () => {
        if (isCurrent) {
            return;
        }

        if (!isCurrent) {
            setIsCurrent(true);
            setIsScheduled(false);
        }
    };

    return (
        <div>
            <nav>
                <ul>
                    <li className={isScheduled ? classes.active : ''}>
                        <input
                            id="scheduled"
                            type="radio"
                            name="transactions"
                        ></input>
                        <label
                            htmlFor="scheduled"
                            onClick={clickScheduledHandler}
                        >
                            예정 내역
                        </label>
                    </li>
                    <li className={isCurrent ? classes.active : ''}>
                        <input
                            id="current"
                            type="radio"
                            name="transactions"
                        ></input>
                        <label htmlFor="current" onClick={clickCurrentHandler}>
                            거래 내역
                        </label>
                    </li>
                </ul>
            </nav>
            <section>
                <TransactionList
                    isCurrent={isCurrent}
                    transactions={
                        isCurrent
                            ? currentTransactionsState
                            : scheduledTransactionsState
                    }
                />
                <TransactionForm
                    isCurrent={isCurrent}
                    onAddTransaction={addTransactionHandler}
                />
            </section>
        </div>
    );
}

export default TransactionLayout;
