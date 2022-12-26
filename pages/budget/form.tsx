import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import PageForm from '../../components/UI/form/PageForm';
import AmountInput from '../../components/UI/input/AmountInput';
import DateInput from '../../components/UI/input/DateInput';
import { MONTH_DAYS } from '../../constants/date';
import { BUDGET_TYPES } from '../../constants/types';

function BudgetForm() {
    const router = useRouter();
    const { type } = router.query;

    const { t, lang } = useTranslation();

    const submitHandler = () => {};

    const startDateSelector = (
        <div className="input-field">
            <label htmlFor="start-select">{t('budget-form:start-date')}</label>
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
            <label htmlFor="title-input">{t('common:title')}</label>
            <input id="title-input" type="text" />
        </div>
    );

    return (
        <PageForm
            title={`${t('budget-form:setting')}`}
            onSubmit={submitHandler}
        >
            {type === BUDGET_TYPES.EVENT ? <DateInput /> : startDateSelector}
            <AmountInput />
            {type === BUDGET_TYPES.EVENT ? titleInput : null}
        </PageForm>
    );
}

export default BudgetForm;
