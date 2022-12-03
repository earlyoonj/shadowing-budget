import { Fragment } from 'react';
import AmountChart from '../../../../Amount/AmountChart';
import AmountDetail from '../../../../Amount/AmountDetail';

function TotalStatus(props) {
    return (
        <Fragment>
            <AmountChart />
            <AmountDetail />
        </Fragment>
    );
}

export default TotalStatus;
