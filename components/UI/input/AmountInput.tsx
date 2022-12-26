import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import AmountInputItem from './AmountInputItem';

function AmountInput() {
    const { t } = useTranslation();
    const [isCalculating, setIsCalculating] = useState(false);
    const [amountInputItems, setAmountInputItems] = useState([<AmountInputItem id="default" />]);

    const toggleCalculating = () => {
        setIsCalculating((prevState) => !prevState);
    };

    const addAmountInputHandler = () => {
        const id = amountInputItems.length.toString();
        setAmountInputItems((prev) => {
            return [...prev, <AmountInputItem id={id}/>]
        })
    }

    // const removeAmountInputHandler = (idx) => {
    //     setAmountInputItems((prev) => {

    //     })
    // }

    const amountInputList = <ul>
        예정 지출 항목
        {amountInputItems}
        <button type="button" className="button__primary" onClick={addAmountInputHandler}>항목 추가</button>
    </ul>

    return (
        <div className="input-field">
            <label htmlFor="amount-input">{t('budget-form:amount')}</label>
            <input id="amount-input" type="number" />
            <button
                type="button"
                className="button__primary"
                onClick={toggleCalculating}
            >
                {isCalculating ? '계산완료' : '계산해보기'}
            </button>
            {isCalculating ? amountInputList : null}
        </div>
    );
}

export default AmountInput;
