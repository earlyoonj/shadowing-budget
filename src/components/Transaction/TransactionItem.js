import classes from './TransactionItem.module.css';

function TransactionItem(props) {
    const { type, date, title, content, amount } = props.item;
    return (
        <li>
            <p className={classes.date}>{date}</p>
            <div className={classes.item}>
                <div className={classes.controls}>
                    <input
                        type="checkbox"
                        disabled={type === 'current' ? true : false}
                    />
                    <div className={classes.info}>
                        <h5>{title}</h5>
                        <p>{content}</p>
                    </div>
                </div>
                <span className={classes.amount}>{amount}</span>
            </div>
        </li>
    );
}

export default TransactionItem;
