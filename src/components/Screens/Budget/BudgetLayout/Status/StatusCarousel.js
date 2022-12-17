import Carousel from '../../../../UI/Carousel';
import CategoryStatus from './CategoryStatus';
import DateStatus from './DateStatus';
import TotalStatus from './TotalStatus';

function StatusCarousel(props) {
    return (
        <Carousel id="status" initialIndex="2" width="20rem">
            <DateStatus />
            <TotalStatus />
            <CategoryStatus />
        </Carousel>
    );
}

export default StatusCarousel;
