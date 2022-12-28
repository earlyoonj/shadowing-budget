import classes from './AmountDetail.module.css';
import { useState } from 'react';
import Amount from '../../models/Amount';

function AmountDetail() {
    const [isTotal, setIsTotal] = useState(true);
    const [isEditBudget, setEditBudget] = useState(false);
    const [amountState, setAmountState] = useState(
        new Amount(40000, 180000, 300000)
    );

    const clickTotalHandler = () => {
        setIsTotal(true);
    };

    const clickLeftHandler = () => {
        setIsTotal(false);
    };

    const editBudgetHandler = () => {
        setEditBudget((prevState) => !prevState);
    };

    const changeBudgetHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (isTotal) {
            const budget = +event.target.value;
            setAmountState(
                new Amount(amountState.current, amountState.scheduled, budget)
            );
        } else {
            const budget =
                +event.target.value +
                (amountState.budget - amountState.getLeftBudget());
            setAmountState(
                new Amount(amountState.current, amountState.scheduled, budget)
            );
        }
    };

    const budgetAmount = isEditBudget ? (
        <div className="input-field">
            <input
                type="number"
                value={
                    isTotal ? amountState.budget : amountState.getLeftBudget()
                }
                onChange={changeBudgetHandler}
            ></input>
        </div>
    ) : (
        <span className={classes.amount}>
            {isTotal
                ? amountState.getBudgetStr()
                : amountState.getLeftBudgetStr()}
        </span>
    );

    return (
        <div className={classes.container}>
            <ul className="nav-tab">
                <li>
                    <input
                        id="amount-detail-total"
                        type="radio"
                        name="amount-detail"
                        defaultChecked={true}
                    ></input>
                    <label
                        htmlFor="amount-detail-total"
                        onClick={clickTotalHandler}
                    >
                        전체 금액
                    </label>
                </li>
                <li>
                    <input
                        id="amount-detail-left"
                        type="radio"
                        name="amount-detail"
                    ></input>
                    <label
                        htmlFor="amount-detail-left"
                        onClick={clickLeftHandler}
                    >
                        남은 금액
                    </label>
                </li>
            </ul>
            <ul className={classes.info}>
                <li className={classes.scheduled}>
                    <span className={classes.label}>
                        {isTotal ? '예정 지출' : '남은 예정'}
                    </span>
                    <span className={classes.amount}>
                        {isTotal
                            ? amountState.getScheduledStr()
                            : amountState.getLeftScheduledStr()}
                    </span>
                </li>
                <li className={classes.current}>
                    <span className={classes.label}>현재 지출</span>
                    <span className={classes.amount}>
                        {amountState.getCurrentStr()}
                    </span>
                </li>
                <li className={classes.budget}>
                    <span className={classes.label}>
                        {isTotal ? '예산 총액' : '남은 예산'}
                    </span>
                    {budgetAmount}
                    <button
                        type="button"
                        className={classes.edit}
                        onClick={editBudgetHandler}
                    >
                        <i
                            className={`fa-solid ${
                                isEditBudget ? 'fa-check' : 'fa-pencil'
                            }`}
                        ></i>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default AmountDetail;
