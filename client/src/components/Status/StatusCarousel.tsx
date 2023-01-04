import Carousel from '../UI/Carousel';
import DateStatus from './DateStatus';
import TotalStatus from './TotalStatus';
import CategoryStatus from './CategoryStatus';

function StatusCarousel(props: { initialIndex: number }) {
    return (
        <Carousel id="status" initialIndex={props.initialIndex}>
            <DateStatus />
            <TotalStatus />
            <CategoryStatus />
        </Carousel>
    );
}

export default StatusCarousel;
