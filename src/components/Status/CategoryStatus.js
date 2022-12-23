import classes from './CategoryStatus.module.css';
import { CHART_TYPE } from '../../config/constants';
import AmountChart from '../Amount/AmountChart';

const getAmountBarWidths = (data) => {
    const maxValues = data.map((item) => {
        return Math.max(...Object.values(item));
    });
    const maxTotal = maxValues.reduce((curr, next) => curr + next, 0);

    const widths = maxValues.map((max) => (max / maxTotal) * 90 + '%');
    return widths;
};

function CategoryStatus(props) {
    const amounts = props.status;
    const widths = getAmountBarWidths(amounts);

    return (
        <ul className={classes.container}>
            {amounts.map((amount, i) => {
                return (
                    <li key={i} style={{ width: widths[i] }}>
                        <AmountChart type={CHART_TYPE.BAR} amount={amount} />
                    </li>
                );
            })}
        </ul>
    );
}

export default CategoryStatus;
