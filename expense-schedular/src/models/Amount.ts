// TODO: locale 따라 처리
const amountUnit = '원';

class Amount {
    _current: number;
    _scheduled: number;
    _budget: number;

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
        return `${this.current.toLocaleString()}${amountUnit}`;
    };
    getScheduledStr = () => {
        return `(${this._scheduled.toLocaleString()}${amountUnit})`;
    };
    getBudgetStr = () => {
        return `/${this._budget.toLocaleString()}${amountUnit}`;
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
