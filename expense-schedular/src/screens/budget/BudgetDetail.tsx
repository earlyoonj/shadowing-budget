import { useParams } from 'react-router-dom';
import BudgetHeader from '../../components/Budget/BudgetHeader';
import StatusCarousel from '../../components/Status/StatusCarousel';
import TransactionLayout from '../../components/Transaction/TransactionLayout';

function BudgetDetail() {
    const { budgetId } = useParams();
    return (
        <>
            <BudgetHeader
                startDate={new Date(2022, 11, 1)}
                endDate={new Date(2022, 11, 31)}
            />
            <main>
                <StatusCarousel initialIndex={1} />
                <hr />
                <TransactionLayout />
            </main>
        </>
    );
}

export default BudgetDetail;
