import classes from './TransactionNav.module.css';

function TransactionNav(props: {
    isCurrent: boolean;
    onClickScheduled: () => void;
    onClickCurrent: () => void;
}) {
    return (
        <ul className={`nav-tab ${classes.nav}`}>
            <li>
                <input
                    id="transaction-list-scheduled"
                    type="radio"
                    name="transaction-list"
                    checked={!props.isCurrent}
                    onChange={props.onClickScheduled}
                ></input>
                <label htmlFor="transaction-list-scheduled">예정 내역</label>
            </li>
            <li>
                <input
                    id="transaction-list-current"
                    type="radio"
                    name="transaction-list"
                    checked={props.isCurrent}
                    onChange={props.onClickCurrent}
                ></input>
                <label htmlFor="transaction-list-current">거래 내역</label>
            </li>
        </ul>
    );
}

export default TransactionNav;
