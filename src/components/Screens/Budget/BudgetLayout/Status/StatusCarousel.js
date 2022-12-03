import Carousel from '../../../../UI/Carousel';
import CategoryStatus from './CategoryStatus';
import DateStatus from './DateStatus';
import TotalStatus from './TotalStatus';

function StatusCarousel(props) {
    return (
        <Carousel>
            <DateStatus />
            <TotalStatus />
            <CategoryStatus />
        </Carousel>
    );
}

export default StatusCarousel;
