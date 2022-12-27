import Carousel from '../UI/Carousel';

function StatusCarousel(props: { initialIndex: number }) {
    return (
        <Carousel id="status" initialIndex={props.initialIndex} width="20rem">
        </Carousel>
    );
}

export default StatusCarousel;
