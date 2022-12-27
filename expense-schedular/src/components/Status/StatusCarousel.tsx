import Carousel from '../UI/Carousel';
import DateStatus from './DateStatus';

function StatusCarousel(props: { initialIndex: number }) {
    return (
        <Carousel id="status" initialIndex={props.initialIndex} width="20rem">
            <DateStatus />
        </Carousel>
    );
}

export default StatusCarousel;
