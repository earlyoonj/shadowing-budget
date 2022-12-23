import { Fragment } from 'react';
import BudgetHeader from './BudgetHeader';
import StatusCarousel from '../../components/Status/StatusCarousel';
import TransactionLayout from '../../components/Transactions/TransactionLayout';

function Budget(props) {
    return (
        <Fragment>
            <BudgetHeader />
            <main>
                <StatusCarousel />
                <hr />
                <TransactionLayout />
            </main>
        </Fragment>
    );
}

export default Budget;
