import { useEffect } from 'react';
import classes from './Carousel.module.css';

const DIVIDER = '-';
const SLIDE_ID_CONNECTOR = `${DIVIDER}slide${DIVIDER}`;
const NAV_ID_CONNECTOR = `${DIVIDER}nav${DIVIDER}`;

function Carousel(props) {
    const {
        children: carouselItems,
        carouselId,
        initialIdx,
        width,
        isNavHidden,
    } = props;

    const slideIdSuffix = `${carouselId}${SLIDE_ID_CONNECTOR}`;
    const navIdSuffix = `${carouselId}${NAV_ID_CONNECTOR}`;

    const carouselNavItems = carouselItems.map((_, index) => {
        return (
            <a
                key={index}
                href={`#${slideIdSuffix}${index}`}
                id={`${navIdSuffix}${index}`}
            ></a>
        );
    });

    const observer = new IntersectionObserver(
        (entries) => {
            const activated = entries.reduce((max, entry) => {
                const entryRatio = entry.intersectionRatio;
                const maxRatio = max.intersectionRatio;
                return entryRatio > maxRatio ? entry : max;
            });
            if (activated.intersectionRatio > 0) {
                const currentIdx = activated.target
                    .getAttribute('id')
                    .split(DIVIDER)[1];
                toggleActive(currentIdx);
            }
        },
        {
            root: document.querySelector(`.${classes.carouselList}`),
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    const toggleActive = (currentIdx) => {
        for (const i in carouselNavItems) {
            const target = document.getElementById(`${navIdSuffix}${i}`);
            if (i === currentIdx) {
                console.log(`${navIdSuffix}${i}`)
                target.className = classes.active;
            } else {
                target.className = '';
            }
        }
    };

    useEffect(() => {
        // initiate hash
        window.location.href = `#${slideIdSuffix}${initialIdx}`;
        const currentIdx = window.location.hash.split(DIVIDER)[1];
        toggleActive(currentIdx);

        // initiate observer
        document
            .querySelectorAll(`.${classes.carouselItem}`)
            .forEach((item) => {
                observer.observe(item);
            });
    }, []);

    return (
        <section className={classes.container} style={{ width }}>
            <ol className={classes.carouselList}>
                {carouselItems.map((item, index) => {
                    const id = `${slideIdSuffix}${index}`;
                    return (
                        <li key={id} id={id} className={classes.carouselItem}>
                            {item}
                        </li>
                    );
                })}
            </ol>
            {!isNavHidden && (
                <div className={classes.carouselNav}>{carouselNavItems}</div>
            )}
        </section>
    );
}

export default Carousel;
