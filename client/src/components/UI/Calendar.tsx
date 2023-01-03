import classes from './Calendar.module.css';
import { WEEK_DAYS } from '../../constants/date';

const startDate = new Date(2022, 11, 1);
const endDate = new Date(2022, 11, 31);

function Calendar(props: {
    startDate: Date;
    endDate: Date;
    onClick?: (event: React.MouseEvent) => void;
}) {
    const getMonthTr = (date: Date) => {
        const month = [];
        for (let i = 0; i < date.getDay(); i++) {
            month.push(<td key={i} />);
        }
        month.push(
            <td className={classes.month} key={`month-${date.getMonth()}`}>
                {date.toLocaleString('ko-KR', { month: 'long' })}
            </td>
        );
        return month;
    };

    const getWeekTr = () => {
        const weeks = [];

        for (const date = new Date(startDate); date < endDate; ) {
            const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const week = WEEK_DAYS.map((_, i) => {
                if (date > endDate) {
                    return;
                }

                const currDate = date.getDate();

                if (date.getDay() === i) {
                    // month
                    if (currDate === 1 || currDate === startDate.getDate()) {
                        weeks.push(
                            <tr key={`month-${key}`}>{getMonthTr(date)}</tr>
                        );
                    }

                    // date
                    const dateData = new Date(date);
                    date.setDate(currDate + 1);
                    return (
                        <td
                            className={classes.date}
                            key={`date-${i}`}
                            data-date={dateData}
                        >
                            {currDate}
                        </td>
                    );
                } else {
                    return <td key={`date-${i}`}></td>;
                }
            });

            weeks.push(<tr key={`week-${key}`}>{[...week]}</tr>);
        }

        return weeks;
    };

    return (
        <table className={classes.calendar} onClick={props.onClick}>
            <thead>
                <tr>
                    {WEEK_DAYS.map((day) => (
                        <th className={classes.day} key={day}>
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{getWeekTr()}</tbody>
        </table>
    );
}

export default Calendar;
