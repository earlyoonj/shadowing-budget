// TODO: locale 따라 처리
const amountUnit = '원';

const formatCurrent = (amount: number) => {
    return `${amount.toLocaleString()}${amountUnit}`;
};

const formatScheduled = (amount: number) => {
    return `(${amount.toLocaleString()}${amountUnit})`;
};

const formatBudget = (amount: number) => {
    return `/${amount.toLocaleString()}${amountUnit}`;
};

class Amount {
    private _current: number;
    private _scheduled: number;
    private _budget: number;

    get current() {
        return this._current;
    }

    get scheduled() {
        return this._scheduled;
    }

    get budget() {
        return this._budget;
    }

    set current(amount: number) {
        this._current = amount;
    }

    set scheduled(amount: number) {
        this._scheduled = amount;
    }

    set budget(amount: number) {
        this._budget = amount;
    }

    getCurrentStr = () => {
        return formatCurrent(this.current);
    };

    getScheduledStr = () => {
        return formatScheduled(this.scheduled);
    };

    getBudgetStr = () => {
        return formatBudget(this.budget);
    };

    getCurrentDeg = () => {
        return (this._current / this._budget) * 360;
    };

    getScheduledDeg = () => {
        return (this._scheduled / this._budget) * 360;
    };

    getLeftScheduled = () => {
        return this._scheduled - this._current;
    };

    getLeftBudget = () => {
        const bigger =
            this._scheduled > this._current ? this._scheduled : this._current;
        return this.budget - bigger;
    };

    getLeftScheduledStr = () => {
        return formatScheduled(this.getLeftScheduled());
    };

    getLeftBudgetStr = () => {
        return formatBudget(this.getLeftBudget());
    };

    addCurrent = (amount: number) => {
        this._current += amount;
    };

    addScheduled = (amount: number) => {
        this._scheduled += amount;
    };

    constructor(current: number, scheduled: number, budget: number) {
        this._current = current;
        this._scheduled = scheduled;
        this._budget = budget;
    }
}

export default Amount;
