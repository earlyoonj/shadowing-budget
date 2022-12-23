import classes from './StatusHeader.module.css';

function StatusHeader() {
    const now = new Date();

    const year = now.getFullYear();
    const yearStr = `${year}`;

    const month = now.getMonth() + 1;
    const monthStr = `${month}`;
    return (
        <header className={classes.header}>
            <span className={classes.center}>
                {yearStr}.{monthStr}.01 ~ {yearStr}.{monthStr}.31
            </span>
            <h1 className={classes.center}>12월 예산</h1>
        </header>
    );
}

export default StatusHeader;
