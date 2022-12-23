import { Fragment, useState } from 'react';
import { CHART_TYPE } from '../../config/constants';
import AmountChart from '../Amount/AmountChart';
import AmountDetail from '../Amount/AmountDetail';

function TotalStatus(props) {
    return (
        <Fragment>
            <AmountChart type={CHART_TYPE.DOUGHNUT} amount={props.status} />
            <AmountDetail />
        </Fragment>
    );
}

export default TotalStatus;
