import classes from '../../styles/BudgetPage.module.css';

import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import BudgetItem from '../../components/Budget/BudgetItem';
import { BUDGET_TYPES } from '../../constants/types';
import Amount from '../../models/Amount';

const DUMMY_BUDGETS: {}[] = [];

function BudgetPage() {
    const { t, lang } = useTranslation();

    const [isRepeating, setIsRepeating] = useState(true);
    const changeTabHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsRepeating((prev) => !prev);
    };

    const start = new Date(2022, 11, 1);
    const end = new Date(2022, 11, 31);

    return (
        <div className={`page`}>
            <h2>{t('budget:my-budget')}</h2>
            <div className={classes['radio-controls']}>
                <input
                    id="period-select"
                    type="radio"
                    name="budget-type"
                    value="period"
                    onChange={changeTabHandler}
                    checked={isRepeating}
                />
                <label htmlFor="period-select">
                    {t('budget:repeating-budget')}
                </label>
                <input
                    id="event-select"
                    type="radio"
                    name="budget-type"
                    value="event"
                    onChange={changeTabHandler}
                    checked={!isRepeating}
                />
                <label htmlFor="event-select">{t('budget:event-budget')}</label>
            </div>
            <ol id="budget-list">
                <BudgetItem
                    startDate={start}
                    endDate={end}
                    amount={new Amount(0, 0, 0)}
                />
            </ol>
            <a
                href={`/budget/form?type=${
                    isRepeating ? BUDGET_TYPES.REPEATING : BUDGET_TYPES.EVENT
                }`}
                className={`button__primary ${classes.button}`}
            >
                {isRepeating ? t('budget:set-budget') : t('budget:add-budget')}
            </a>
        </div>
    );
}

export default BudgetPage;
