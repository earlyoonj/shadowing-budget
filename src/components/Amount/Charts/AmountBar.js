import { useEffect } from 'react';
import classes from './AmountBar.module.css';

function AmountBar(props) {
    // NOTE: data should be sorted
    // TODO: consist tooltip based on labels
    const { data, labels, backgroundColors } = props;

    const total = Math.max(...data);
    const heights = data.map((amount) => {
        return `${(amount / total) * 100}%`;
    });

    const bars = backgroundColors.map((backgroundColor, i) => {
        const height = heights[i];
        const animationDuration = 3 - (i + 1) * 0.8 + 's';
        const barStyle = { backgroundColor, height, animationDuration };
        return (
            <p
                key={i}
                className={`${classes.bar} ${classes.animation}`}
                style={barStyle}
            ></p>
        );
    });

    return (
        <div className={classes.barHolder}>
            {bars.reverse()}
        </div>
    );
}

export default AmountBar;
