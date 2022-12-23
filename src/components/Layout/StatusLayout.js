import { Fragment } from 'react';
import TotalStatus from '../Status/TotalStatus';
import Carousel from '../UI/Carousel';
import classes from './StatusLayout.module.css';

const INITIAL_IDX = '1';

function StatusLayout(props) {
    return (
        <Fragment>
            <Carousel carouselId="status" width="16rem" initialIdx="1">
                <span>Calendar{/* <CalendarView /> */}</span>
                <TotalStatus amount={props.amount} />
                <span>Category{/* <CategoryChart /> */}</span>
            </Carousel>
            <hr className={classes.divider} />
        </Fragment>
    );
}

export default StatusLayout;
