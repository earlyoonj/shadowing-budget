import { Fragment } from 'react';
import StatusHeader from './components/Layout/StatusHeader';
import StatusLayout from './components/Layout/StatusLayout';
import TransactionLayout from './components/Layout/TransactionLayout';

const budgetData = { budget: 300000, scheduled: 240000, current: 80000 };

function App() {
    const addTransactionHandler = () => {};

    return <Fragment>
        <StatusHeader />
        <StatusLayout amount={budgetData} />
        <TransactionLayout onAddTransaction={addTransactionHandler} />
    </Fragment>;
}

export default App;
