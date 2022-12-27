import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BudgetItem from '../../components/Budget/BudgetItem';
import { BUDGET_TYPES } from '../../constants/types';
import Amount from '../../models/Amount';
import classes from './BudgetList.module.css';

function BudgetList() {
    const [isRepeating, setIsRepeating] = useState(true);

    const changeTabHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsRepeating((prev) => !prev);
    };

    // const budgets: any = useLoaderData();
    const budgets = [
        {
            id: '01',
            type: BUDGET_TYPES.REPEATING,
            startDate: new Date(2022, 11, 1),
            endDate: new Date(2022, 11, 31),
            amount: new Amount(0, 0, 0),
        },
    ];

    const filteredBudget = budgets.filter((budget: any) => {
        if (isRepeating) {
            return budget.type === BUDGET_TYPES.REPEATING;
        } else {
            return budget.type === BUDGET_TYPES.EVENT;
        }
    });

    return (
        <div className="page">
            <h2>나의 예산</h2>
            <div className={classes['radio-controls']}>
                <input
                    id="repeating-select"
                    type="radio"
                    name="budget-type"
                    value={BUDGET_TYPES.REPEATING}
                    onChange={changeTabHandler}
                    checked={isRepeating}
                />
                <label htmlFor="repeating-select">반복예산</label>
                <input
                    id="event-select"
                    type="radio"
                    name="budget-type"
                    value={BUDGET_TYPES.EVENT}
                    onChange={changeTabHandler}
                    checked={!isRepeating}
                />
                <label htmlFor="event-select">특별예산</label>
            </div>
            <ol>
                {filteredBudget.map((budget: any, i: number) => {
                    const { id, startDate, endDate, amount } = budget;
                    return (
                        <BudgetItem
                            key={i}
                            id={id}
                            startDate={startDate}
                            endDate={endDate}
                            amount={amount}
                        />
                    );
                })}
            </ol>
            <a
                href={`/budget/form?type=${
                    isRepeating ? BUDGET_TYPES.REPEATING : BUDGET_TYPES.EVENT
                }`}
                className={`button__primary ${classes.button}`}
            >
                {isRepeating ? '예산 설정하기' : '예산 추가하기'}
            </a>
        </div>
    );
}

export function loader() {
    // return getBudgets();
}

export default BudgetList;
