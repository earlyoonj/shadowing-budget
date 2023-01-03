import Calendar from '../UI/Calendar';

function DateStatus() {
    const clickHandler = (event: React.MouseEvent) => {
        const date = (event.target as HTMLTableDataCellElement).getAttribute(
            'data-date'
        );
        console.log(date);
    };
    return (
        <Calendar
            startDate={new Date(2022, 11, 1)}
            endDate={new Date(2022, 11, 31)}
            onClick={clickHandler}
        ></Calendar>
    );
}

export default DateStatus;
