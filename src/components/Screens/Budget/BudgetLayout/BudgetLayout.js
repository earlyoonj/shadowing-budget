import { useState } from 'react';
import StatusCarousel from './Status/StatusCarousel';
import TransactionLayout from './Transactions/TransactionLayout';

function BudgetLayout(prop) {
    return (
        <main>
            <StatusCarousel />
            <hr />
            <TransactionLayout />
        </main>
    );
}

export default BudgetLayout;
