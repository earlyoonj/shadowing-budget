import { Link } from 'react-router-dom';
import classes from './BudgetItem.module.css';
import Amount from '../../models/Amount';

function BudgetItem(props: {
    id: string;
    title?: string;
    startDate: Date;
    endDate: Date;
    amount: Amount;
}) {
    const getMonthName = (date: Date) => {
        // TODO: LOCALE 상수 찾아서 넣기
        return date.toLocaleString('ko-KR', { month: 'long' });
    };

    // date
    const start = props.startDate.toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
    });
    const end = props.endDate.toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
    });

    // title
    const startMonth = getMonthName(props.startDate);
    const endMonth = getMonthName(props.endDate);
    const defaultTitle =
        startMonth === endMonth ? startMonth : `${startMonth} - ${endMonth}`;
    const title = props.title ? props.title : defaultTitle;

    return (
        <li>
            <Link to={props.id} className={classes.item}>
                <div className={classes.info}>
                    <p>{`${start} ~ ${end}`}</p>
                    <h5>{title}</h5>
                </div>
                <div className={classes.amount}>
                    <p className={classes.schedule}>
                        {props.amount.getScheduledStr()}
                    </p>
                    <p className={classes.current}>
                        {props.amount.getCurrentStr()}
                    </p>
                    <p className={classes.budget}>
                        {props.amount.getBudgetStr()}
                    </p>
                </div>
            </Link>
        </li>
    );
}

export default BudgetItem;
