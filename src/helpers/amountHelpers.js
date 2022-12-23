const sortByAmount = (items) => {
    const sortedItems = [...items];
    sortedItems.sort((prev, next) => prev.amount - next.amount);
    return sortedItems;
};

const getLeftDataForChart = (items) => {
    return items.map((item, i) => {
        let amount = item.amount;
        const prevItem = items[i - 1];
        if (prevItem) {
            amount -= prevItem.amount;
        }
        return amount;
    });
};

const getOverAmountStyle = (items) => {
    const style = {
        labels: [],
        backgroundColor: []
    }

    items.forEach((item, i) => {
        const isFirstItem = i === 0;
        const isFrontNext = !isFirstItem && item.index < items[i - 1].index;
        const isFrontDefault = item.index < i;

        let key = 'default';
        if (isFrontDefault || isFrontNext) {
            key = 'over';
        }

        style.backgroundColor.push(item.color[key]);
        style.labels.push(item.label[key]);
    });

    return style;
};

export { sortByAmount, getLeftDataForChart, getOverAmountStyle };
