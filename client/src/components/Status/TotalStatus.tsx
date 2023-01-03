import { Fragment } from 'react';
import AmountDetail from '../Amount/AmountDetail';
import AmountDoughnut from '../Amount/AmountDoughnut';

function TotalStatus() {
    return (
        <Fragment>
            <AmountDoughnut />
            <AmountDetail />
        </Fragment>
    );
}

export default TotalStatus;
