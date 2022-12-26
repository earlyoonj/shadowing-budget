import useTranslation from 'next-translate/useTranslation';
import classes from '../../../styles/AmountInputItem.module.css';

function AmountInputItem(props: { id: string }) {
    const { t } = useTranslation();
    return (
        <li className={classes.item}>
            <div className={classes.inputs}>
                <div className="input-field">
                    <label>이름</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>날짜</label>
                    <input type="date" />
                </div>
                <div className="input-field">
                    <label>금액</label>
                    <input type="number" />
                </div>
            </div>
            
            <div className={classes.checkboxes}>
                <div className="checkbox-field">
                    <input
                        type="radio"
                        id={`${props.id}-minus`}
                        name="from-total"
                        value="minus"
                    />
                    <label htmlFor={`${props.id}-minus`}>
                        총 금액에서 가져오기
                    </label>
                </div>
                <div className="checkbox-field">
                    <input
                        type="radio"
                        id={`${props.id}-plus`}
                        name="from-total"
                        value="plus"
                        defaultChecked={true}
                    />
                    <label htmlFor={`${props.id}-plus`}>총 금액에 더하기</label>
                </div>
            </div>
        </li>
    );
}

export default AmountInputItem;
