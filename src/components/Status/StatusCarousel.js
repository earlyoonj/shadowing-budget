import Carousel from '../UI/Carousel';
import CategoryStatus from './CategoryStatus';
import DateStatus from './DateStatus';
import TotalStatus from './TotalStatus';

import {
    CSB,
    CBS,
    SCB,
    SBC,
    BCS,
    BSC,
} from '../../test/chart-amount-data';

function StatusCarousel(props) {
    return (
        <Carousel id="status" initialIndex="0" width="20rem">
            <DateStatus />
            <TotalStatus status={CSB} />
            <CategoryStatus status={[CSB, CBS, SCB, SBC, BCS, BSC]} />
        </Carousel>
    );
}

export default StatusCarousel;
