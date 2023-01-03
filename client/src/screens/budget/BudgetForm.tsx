import { useParams, useSearchParams } from 'react-router-dom';
import PageForm from '../../components/UI/form/PageForm';
import DateInput from '../../components/UI/input/DateInput';
import { MONTH_DAYS } from '../../constants/date';
import { BUDGET_TYPE } from '../../constants/types';

function BudgetForm() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const submitHandler = () => {};

    const startDateSelector = (
        <div className="input-field">
            <label htmlFor="start-select">시작일</label>
            <select id="start-select">
                {MONTH_DAYS.map((day) => (
                    <option key={day} value={day}>
                        {day}
                    </option>
                ))}
            </select>
        </div>
    );

    const titleInput = (
        <div className="input-field">
            <label htmlFor="title-input">제목</label>
            <input id="title-input" type="text" />
        </div>
    );

    return (
        <PageForm title="예산 설정" onSubmit={submitHandler}>
            {type === BUDGET_TYPE.EVENT ? <DateInput /> : startDateSelector}
            <div className="input-field">
                <label htmlFor="amount-input">예산 금액</label>
                <input id="amount-input" type="number" />
            </div>
            {type === BUDGET_TYPE.EVENT ? titleInput : null}
        </PageForm>
    );
}

export default BudgetForm;
