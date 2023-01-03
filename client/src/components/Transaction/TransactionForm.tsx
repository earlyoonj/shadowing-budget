import classes from './TransactionForm.module.css';
import { useState } from 'react';
import OverlayForm from '../UI/form/OverlayForm';
import TransactionNav from './TransactionNav';

function TransactionForm(props: {
    isCurrent: boolean;
    onClickScheduled: () => void;
    onClickCurrent: () => void;
    onSubmit: (event: React.FormEvent, isExpense: boolean) => void;
}) {
    const [isExpand, setIsExpand] = useState(false);
    const [amount, setAmount] = useState('');

    const expandHandler = () => {
        setIsExpand(true);
    };

    const cancelHandler = () => {
        setAmount('');
        setIsExpand(false);
    };

    const changeAmountHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAmount(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        setAmount('');
        setIsExpand(false);
        props.onSubmit(event, isExpense);
    };

    let isExpense = true;
    const setExpense = () => {
        isExpense = true;
    };
    const setIncome = () => {
        isExpense = false;
    };

    const shortInput = (
        <div className={`input-field ${classes.short}`}>
            <input
                type="number"
                placeholder="금액을 입력하세요"
                value={amount}
                onChange={changeAmountHandler}
            />
            <button
                className="button__primary"
                type="button"
                onClick={expandHandler}
            >
                내역추가
            </button>
        </div>
    );

    const expandInput = (
        <div className={classes.expand}>
            <TransactionNav
                isCurrent={props.isCurrent}
                onClickScheduled={props.onClickScheduled}
                onClickCurrent={props.onClickCurrent}
            />
            <div className={classes.inputs}>
                <div className="input-field">
                    <label>금액</label>
                    <input
                        type="number"
                        onChange={changeAmountHandler}
                        value={amount}
                    />
                </div>
                <div className="input-field">
                    <label>제목</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>날짜</label>
                    <input type="date" />
                </div>
                <div className={classes.selects}>
                    <div className="input-field">
                        <label>분류</label>
                        <input type="text" />
                    </div>
                    <div className="input-field">
                        <label>태그</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="input-field">
                    <label>메모</label>
                    <textarea rows={2} />
                </div>
            </div>
            <div className={classes.buttons}>
                <button
                    className={classes.cancel}
                    type="button"
                    onClick={cancelHandler}
                >
                    취소
                </button>
                <button
                    className={`button__primary ${classes.submit}`}
                    onClick={setIncome}
                    type="submit"
                >
                    수입 내역 추가
                </button>
                <button
                    className={`button__primary ${classes.submit}`}
                    onClick={setExpense}
                    type="submit"
                >
                    지출 내역 추가
                </button>
            </div>
        </div>
    );

    return (
        <OverlayForm onSubmit={submitHandler} isShowBackdrop={isExpand}>
            {isExpand ? expandInput : shortInput}
        </OverlayForm>
    );
}

export default TransactionForm;
