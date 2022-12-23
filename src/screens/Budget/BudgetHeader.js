import classes from './BudgetHeader.module.css';

const startDate = new Date(2022, 11, 1);
const endDate = new Date(2022, 11, 31);
const title = '12월 생활비';

const getDateString = (date) => {
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).split(' ').join('');
};

function BudgetHeader(props) {
    return (
        <header className={classes.header}>
            <div className={classes.date}>
                <span>{getDateString(startDate)}</span>
                <span> ~ </span>
                <span>{getDateString(endDate)}</span>
            </div>
            <h1 className={classes.title}>{title}</h1>
        </header>
    );
}

export default BudgetHeader;
