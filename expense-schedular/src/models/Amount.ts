// TODO: locale 따라 처리
const amountUnit = '원';

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
        return `${this.current.toLocaleString()}${amountUnit}`;
    };
    getScheduledStr = () => {
        return `(${this._scheduled.toLocaleString()}${amountUnit})`;
    };
    getBudgetStr = () => {
        return `/${this._budget.toLocaleString()}${amountUnit}`;
    };

    getCurrentDeg = () => {
        return (this._current / this._budget) * 360;
    };

    getScheduledDeg = () => {
        return (this._scheduled / this._budget) * 360;
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
