import { Fragment, useState, useRef, useEffect } from 'react';
import classes from './TransactionForm.module.css';

function TransactionForm(props) {
    const [isExpand, setIsExpand] = useState(false);
    const [isCurrent, setIsCurrent] = useState(props.isCurrent);
    const amountRef = useRef();
    const titleRef = useRef();
    const dateRef = useRef();
    const contentRef = useRef();
    const scheduledTransactionRef = useRef();
    const currentTransactionRef = useRef();

    useEffect(() => {
        setIsCurrent(props.isCurrent);
    }, [props.isCurrent]);


    const expandHandler = () => {
        setIsExpand((state) => {
            return !state;
        });
    };

    const resetForm = () => {
        amountRef.current.value = '';
        titleRef.current.value = '';
        dateRef.current.value = '';
        contentRef.current.value = '';
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const type = currentTransactionRef.current.checked
            ? 'current'
            : 'scheduled';
        const amount = +amountRef.current.value;
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const content = contentRef.current.value;

        if (amount === '') {
            return;
        }

        if (title === '') {
            return;
        }

        if (date === '') {
            return;
        }

        const transaction = { type, amount, title, date, content };
        props.onAddTransaction(transaction);

        resetForm();

        setIsExpand(false);
    };

    const checkedScheduleHandler = () => {
        console.log('schedule - isCurrent?', isCurrent);
        if (!isCurrent) {
            return;
        }
        setIsCurrent(false);
    };

    const checkedCurrentHandler = () => {
        console.log('current - isCurrent?', isCurrent);
        if (isCurrent) {
            return;
        }
        setIsCurrent(true);
    };

    const cancelHandler = () => {
        resetForm();
        expandHandler();
    };

    return (
        <Fragment>
            <form
                className={`${classes.form} ${isExpand ? classes.expand : ''}`}
            >
                <ul
                    className={`${classes.nav} ${
                        !isExpand ? classes.hide : ''
                    }`}
                >
                    <li>
                        <input
                            type="radio"
                            id="form-scheduled"
                            name="transaction"
                            ref={scheduledTransactionRef}
                            checked={!isCurrent}
                        ></input>
                        <label
                            htmlFor="form-scheduled"
                            onClick={checkedScheduleHandler}
                        >
                            예정 내역
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id="form-current"
                            name="transaction"
                            ref={currentTransactionRef}
                            checked={isCurrent}
                        ></input>
                        <label
                            htmlFor="form-current"
                            onClick={checkedCurrentHandler}
                        >
                            거래 내역
                        </label>
                    </li>
                </ul>
                <ul className={classes.inputs}>
                    <li className={classes.controls}>
                        <label
                            htmlFor="amount"
                            className={!isExpand ? classes.hide : ''}
                        >
                            금액
                        </label>
                        <input
                            className={classes.amount}
                            id="amount"
                            type="number"
                            step="10"
                            placeholder="금액을 입력하세요"
                            ref={amountRef}
                        ></input>
                    </li>
                    <li
                        className={`${classes.controls} ${
                            !isExpand ? classes.hide : ''
                        }`}
                    >
                        <label htmlFor="name">제목</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="제목을 입력하세요"
                            ref={titleRef}
                        ></input>
                    </li>
                    <li
                        className={`${classes.controls} ${
                            !isExpand ? classes.hide : ''
                        }`}
                    >
                        <label htmlFor="date">날짜</label>
                        <input
                            id="date"
                            type="date"
                            placeholder="날짜를 입력하세요"
                            ref={dateRef}
                        ></input>
                    </li>
                    <li
                        className={`${classes.controls} ${
                            !isExpand ? classes.hide : ''
                        }`}
                    >
                        <label htmlFor="content">내용</label>
                        <input
                            id="content"
                            type="textarea"
                            placeholder="내용을 입력하세요"
                            ref={contentRef}
                        ></input>
                    </li>
                </ul>
                <div className={classes.buttons}>
                    <button
                        className={`${classes.add} ${
                            isExpand ? classes.hide : ''
                        }`}
                        type="button"
                        onClick={expandHandler}
                    >
                        내역 추가
                    </button>
                    <button
                        className={`${classes.cancel} ${
                            !isExpand && classes.hide
                        }`}
                        type="button"
                        onClick={cancelHandler}
                    >
                        취소
                    </button>
                    <button
                        className={`${classes.add} ${
                            !isExpand && classes.hide
                        }`}
                        type="submit"
                        onClick={submitHandler}
                    >
                        내역 추가
                    </button>{' '}
                </div>{' '}
            </form>
            <div className={classes.backdrop} onClick={expandHandler}></div>
        </Fragment>
    );
}

export default TransactionForm;
