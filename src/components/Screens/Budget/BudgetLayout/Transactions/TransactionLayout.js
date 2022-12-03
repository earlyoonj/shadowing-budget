import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function TransactionLayout(props) {
    return (
        <section>
            <TransactionList />
            <TransactionForm />
        </section>
    );
}

export default TransactionLayout;
