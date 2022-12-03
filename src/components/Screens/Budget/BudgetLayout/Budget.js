import { Fragment } from 'react';
import BudgetHeader from './BudgetHeader';
import BudgetLayout from './BudgetLayout';

function Budget(props) {
    return (
        <Fragment>
            <BudgetHeader />
            <BudgetLayout />
        </Fragment>
    );
}

export default Budget;
