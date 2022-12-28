import { Fragment } from 'react';
import Amount from '../../models/Amount';
import classes from './AmountDoughnut.module.css';

const degreeToPolygon = (deg: number) => {
    const point = (10 / 9) * deg;

    if (0 <= deg && deg <= 45) {
        const style = { clipPath: 'polygon(50% 50%, 50% 0' };
        style.clipPath += `, ${point + 50}% 0)`;
        return style;
    } else if (deg <= 135) {
        const style = { clipPath: 'polygon(50% 50%, 50% 0, 100% 0' };
        style.clipPath += `, 100% ${point - 50}%)`;
        return style;
    } else if (deg <= 225) {
        const style = {
            clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%',
        };
        style.clipPath += `, ${-1 * point + 250}% 100%)`;
        return style;
    } else if (deg <= 315) {
        const style = {
            clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%',
        };
        style.clipPath += `, 0 ${-1 * point + 350}%)`;
        return style;
    } else if (deg <= 360) {
        const style = {
            clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0',
        };
        style.clipPath += `, ${point - 350}% 0)`;
        return style;
    } else {
        return {};
    }
};

function AmountDoughnut() {
    const amount = new Amount(40000, 180000, 300000);

    return (
        <Fragment>
            <div
                className={classes.container}
                style={{ width: '14rem', height: '14rem' }}
            >
                <div>
                    <div className={classes.palette}>
                        <div className={classes.budget}></div>
                    </div>
                </div>
                <div>
                    <div className={classes.palette}>
                        <div
                            className={classes.scheduled}
                            style={degreeToPolygon(amount.getScheduledDeg())}
                        ></div>
                    </div>
                </div>
                <div>
                    <div className={classes.palette}>
                        <div
                            className={`${classes.current}`}
                            style={degreeToPolygon(amount.getCurrentDeg())}
                        ></div>
                    </div>
                </div>
            </div>

            <svg
                style={{ visibility: 'hidden', position: 'absolute' }}
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
            >
                <defs>
                    <filter id="rounded">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="6"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="rounded"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="rounded"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>
        </Fragment>
    );
}

export default AmountDoughnut;
