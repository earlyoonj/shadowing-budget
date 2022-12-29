import classes from './TransactionList.module.css';
import Category from '../../models/Category';
import TransactionItem from './TransactionItem';

function TransactionList(props: {
    transactions: {
        date: Date;
        logs: {
            id: string;
            isCurrent: boolean;
            isExpense: boolean;
            title: string[];
            amount: number;
            category?: Category;
            tags?: string[];
        }[];
    }[];
}) {
    return (
        <ol className={`page ${classes.list}`}>
            {props.transactions.map((transaction) => {
                return (
                    <li key={transaction.date.toISOString()}>
                        <ol>
                            <h5 className={classes.date}>
                                {transaction.date.toLocaleDateString()}
                            </h5>
                            {transaction.logs.map((log) => {
                                return (
                                    <TransactionItem
                                        key={log.id}
                                        id={log.id}
                                        isCurrent={log.isCurrent}
                                        isExpense={log.isExpense}
                                        title={log.title}
                                        amount={log.amount}
                                        category={log.category}
                                        tags={log.tags}
                                    />
                                );
                            })}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}

export default TransactionList;
