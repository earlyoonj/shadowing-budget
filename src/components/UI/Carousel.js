import { CAROUSEL_ID } from '../../config/constants';
import classes from './Carousel.module.css';

import { useEffect } from 'react';

const { DIVIDER, SLIDE_ID, NAV_ID } = CAROUSEL_ID;

const getObserver = (selector) => {
    return new IntersectionObserver(
        (entries) => {
            const activated = entries.reduce((max, entry) => {
                const entryRatio = entry.intersectionRatio;
                const maxRatio = max.intersectionRatio;
                return entryRatio > maxRatio ? entry : max;
            });

            if (activated.intersectionRatio > 0) {
                const activatedId = activated.target.getAttribute('id');
                const currentIdx = getNavIndexById(activatedId);
                toggleActive(currentIdx);
            }
        },
        {
            root: document.querySelector(selector),
            rootMargin: '0px',
            threshold: 0.5,
        }
    );
}

const toggleActive = (currentIdx) => {
    const navItems = document.querySelectorAll(`.${classes.carouselNav} a`);
    for (const target of navItems) {
        if (currentIdx === getNavIndexById(target.id)) {
            target.className = classes.active;
        } else {
            target.className = '';
        }
    }
};

const getNavIndexById = (id) => {
    return id.split(DIVIDER)[2];
};


function Carousel(props) {
    const {
        children: carouselItems,
        id: carouselId,
        initialIndex,
        width,
    } = props;

    const slideIdPrefix = `${carouselId}${DIVIDER}${SLIDE_ID}${DIVIDER}`;
    const navIdPrefix = `${carouselId}${DIVIDER}${NAV_ID}${DIVIDER}`;

    const observer = getObserver(`.${classes.carouselList}`);

    useEffect(() => {
        // initiate hash
        window.location.href = `#${slideIdPrefix}${initialIndex}`;
        const currentIdx = getNavIndexById(window.location.hash);
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
                    const id = `${slideIdPrefix}${index}`;
                    return (
                        <li key={id} id={id} className={classes.carouselItem}>
                            {item}
                        </li>
                    );
                })}
            </ol>
            <nav className={classes.carouselNav}>
                {carouselItems.map((_, index) => {
                    return (
                        <a
                            key={index}
                            href={`#${slideIdPrefix}${index}`}
                            id={`${navIdPrefix}${index}`}
                        ></a>
                    );
                })}
            </nav>
        </section>
    );
}

export default Carousel;
