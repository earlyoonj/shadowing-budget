import classes from './AmountBarContainer.module.css';
import { CHART_TYPE } from '../../../config/constants';
import AmountChart from '../AmountChart';

function AmountBarContainer(props) {
    const amounts = props.amounts;
    const maxValues = amounts.map((amount) => {
        return Math.max(...Object.values(amount));
    });
    const maxTotal = maxValues.reduce((curr, next) => curr + next, 0);
    const widths = maxValues.map((max) => (max / maxTotal) * 90 + '%');

    return (
        <ul className={classes.container}>
            {amounts.map((amount, i) => {
                return (
                    <li style={{width: widths[i]}}>
                        <AmountChart
                            type={CHART_TYPE.BAR}
                            amount={amount}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default AmountBarContainer;
