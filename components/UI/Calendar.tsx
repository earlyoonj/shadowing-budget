import classes from '../../styles/Calendar.module.css';
import { DAYS } from '../../constants/date';

const startDate = new Date(2022, 11, 1);
const endDate = new Date(2022, 11, 31);

function Calendar(props: { onClick: () => void }) {
    // const { startDate, endDate } = props;

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

    const getWeeks = () => {
        const weeks = [];

        for (const date = new Date(startDate); date < endDate; ) {
            const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const week = DAYS.map((_: string, i: number) => {
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
                    {DAYS.map((day: string) => (
                        <th className={classes.day} key={day}>
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{getWeeks()}</tbody>
        </table>
    );
}

export default Calendar;
