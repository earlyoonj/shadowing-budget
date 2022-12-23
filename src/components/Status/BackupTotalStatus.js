import classes from './TotalStatus.module.css';

const STATUS_CONFIG = {
    current: {
        label: {
            default: '',
            over: ''
        },
        color: {
            default: '',
            over: ''
        }
    },
    scheduled: {
        label: {
            default: '',
            over: ''
        },
        color: {
            default: '',
            over: ''
        }
    },
    budget: {
        label: {
            default: '',
            over: ''
        },
        color: {
            default: '',
            over: ''
        }
    },
}

function TotalStatus(props) {
    const { budget, scheduled, current } = props.amount;

    // TODO: 차트를 직접 구성할 수 있는 방안 모색..
    const initialData = [
        {
            id: 'c0',
            label: '거래금액',
            amount: current,
            color: CURRENT_COLOR,
        },
        {
            id: 's0',
            label: '예정금액',
            amount: scheduled,
            color: SCHEDULED_COLOR,
        },
        {
            id: 'b0',
            label: '남은예산',
            amount: budget,
            color: BUDGET_COLOR,
        },
    ];

    initialData.sort((prev, next) => prev.amount - next.amount);

    const secondAmount = initialData[1];
    const lastAmount = initialData[2];
    const secondAmountValue = secondAmount.amount;
    secondAmount.amount -= initialData[0].amount;
    lastAmount.amount -= secondAmountValue;

    switch (lastAmount.id) {
        case CURRENT_ID:
            lastAmount.label = '예산/예정초과 거래금액';
            lastAmount.color = '#cd2020';
            if (budget < scheduled) {
                secondAmount.label = '예산초과 예정금액';
                secondAmount.color = '#ef5e5e';
                secondAmount.amount = scheduled - budget;
            }
            break;
        case SCHEDULED_ID:
            lastAmount.label = '예산초과 예정금액';
            lastAmount.color = '#ef5e5e';
            if (budget < current) {
                secondAmount.label = '예산초과 거래금액';
                secondAmount.color = '#cd2020';
                secondAmount.amount = scheduled - budget;
            }
            break;
        case BUDGET_ID:
            secondAmount.amount = Math.abs(scheduled - current);
            if (current < scheduled) {
                secondAmount.label = '남은 예정금액';
            } else {
                secondAmount.label = '예정초과 거래금액';
                secondAmount.color = '#f3c1c1';
            }
            break;
    }

    const data = initialData.map((data) => data.amount);
    const backgroundColor = initialData.map((data) => data.color);
    const labels = initialData.map((data) => data.label);

    const datasets = [
        { data, backgroundColor, borderRadius: 16, borderWidth: 0 },
    ];
    const overallData = { labels, datasets };

    const overallOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <Fragment>
            <div className={classes.chartContainer}>
                <Doughnut data={overallData} options={overallOptions} />
            </div>

            {/* 컴포넌트화 및 nav없는 carousel로,.. */}
            <ul className={classes.amount}>
                <li className={classes.amountItem}>
                    <div className={classes.controls}>
                        <input type="checkbox" name="amount" checked={true} />
                        <label htmlFor={''} className={classes.scheduledLabel}>
                            예정 금액
                        </label>
                    </div>
                    <span className={classes.scheduledAmount}>
                        ({scheduled.toLocaleString()}원)
                    </span>
                </li>
                <li className={classes.amountItem}>
                    <div className={classes.controls}>
                        <input type="checkbox" name="amount" checked={true} />
                        <label htmlFor={''} className={classes.currentLabel}>
                            거래 금액
                        </label>
                    </div>
                    <span className={classes.currentAmount}>
                        <strong>{current.toLocaleString()}원</strong>
                    </span>
                </li>
                <li className={classes.amountItem}>
                    <div className={classes.controls}>
                        <input type="checkbox" name="amount" checked={true} />
                        <label htmlFor={''} className={classes.budgetLabel}>
                            예산 총액
                        </label>
                    </div>
                    <span className={classes.budgetAmount}>
                        /{budget.toLocaleString()}원
                    </span>
                </li>
            </ul>
        </Fragment>
    );
}
export default TotalStatus;
