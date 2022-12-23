import Calendar from '../UI/Calendar';

function DateStatus(props) {
    return <Calendar onClick={(e) => {console.log(e.target.getAttribute('data'))}}></Calendar>;
}

export default DateStatus;
