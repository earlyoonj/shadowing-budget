import classes from './AmountBars.module.css';
import AmountBar from './AmountBar';
import Amount from '../../models/Amount';

function AmountBars() {
    const amounts = [
        new Amount(10000, 60000, 120000),
        new Amount(100000, 180000, 300000),
        new Amount(120000, 180000, 250000),
        new Amount(200000, 360000, 400000),
        new Amount(30000, 90000, 100000),
        new Amount(100000, 160000, 180000),
    ];

    const budgets = amounts.map((amount) => {
        return amount.budget;
    });
    const totalBudget = budgets.reduce((curr, next) => curr + next, 0);
    const widths = budgets.map((budget) => (budget / totalBudget) * 90 + '%');

    return (
        <ul className={classes.container}>
            {amounts.map((amount, i) => {
                return (
                    <li key={i} style={{ width: widths[i] }}>
                        <AmountBar amount={amount} />
                    </li>
                );
            })}
        </ul>
    );
}

export default AmountBars;
