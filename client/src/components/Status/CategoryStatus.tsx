import { Link } from 'react-router-dom';
import Amount from '../../models/Amount';
import AmountBars from '../Amount/AmountBars';

function CategoryStatus() {
    return (
        <div className="status-container">
            <div className="status-header">
                <h2>카테고리별 예산</h2>
                <Link to="">{'더보기 >'}</Link>
            </div>
            <AmountBars
                amountData={[
                    { amount: new Amount(10000, 60000, 120000), label: '💰' },
                    { amount: new Amount(100000, 180000, 300000), label: '🚉' },
                    { amount: new Amount(120000, 180000, 250000), label: '🎉' },
                    { amount: new Amount(200000, 360000, 400000), label: '🍚' },
                    { amount: new Amount(30000, 90000, 100000), label: '☕️' },
                    { amount: new Amount(100000, 160000, 180000), label: '🎓' },
                ]}
            />
        </div>
    );
}

export default CategoryStatus;
