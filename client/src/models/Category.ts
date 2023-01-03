import Amount from './Amount';

class Category {
    private _id: string;
    private _title: string;
    private _icon: string;
    private _amount: Amount;

    get title() {
        return this._title;
    }

    get icon() {
        return this._icon;
    }

    get amount() {
        return this._amount;
    }

    set budget(amount: number) {
        this._amount.budget = amount;
    }

    addCurrent = (amount: number) => {
        this._amount.current += amount;
    };

    addScheduled = (amount: number) => {
        this._amount.scheduled += amount;
    };

    constructor(id: string, title: string, icon: string, budget: number) {
        this._id = id;
        this._title = title;
        this._icon = icon;
        this._amount = new Amount(0, 0, budget);
    }
}

export default Category;
