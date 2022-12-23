import { CHART_TYPE } from '../../config/constants';
import AmountBar from './Charts/AmountBar';
import AmountDoughnut from './Charts/AmountDoughnut';
import {
    sortByAmount,
    getLeftDataForChart,
    getOverAmountStyle,
} from '../../helpers/amountHelpers';
import { amountOptions } from '../../config/options';

function AmountChart(props) {
    const { current, scheduled, budget } = props.amount;
    const {
        current: currentOpt,
        scheduled: scheduledOpt,
        budget: budgetOpt,
    } = amountOptions;
    const amountItems = [
        { ...currentOpt, amount: current },
        { ...scheduledOpt, amount: scheduled },
        { ...budgetOpt, amount: budget },
    ];

    const sortedAmounts = sortByAmount(amountItems);

    const { labels, backgroundColor } = getOverAmountStyle(sortedAmounts);

    switch (props.type) {
        case CHART_TYPE.DOUGHNUT:
            const doughnutData = getLeftDataForChart(sortedAmounts);
            return (
                <AmountDoughnut
                    labels={labels}
                    datasets={{ data: doughnutData, backgroundColor }}
                />
            );
        case CHART_TYPE.BAR:
            const barData = sortedAmounts.map(item => item.amount);
            return (
                <AmountBar
                    data={barData}
                    labels={labels}
                    backgroundColors={backgroundColor}
                    width={props.width}
                />
            );
    }
}

// labels, datasets: chartData, size, options

export default AmountChart;
