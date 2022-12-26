import useTranslation from "next-translate/useTranslation";

function DateInput() {
    const { t } = useTranslation();
    return (
        <div className="input-field">
            {/* TODO: DatePicker 컴포넌트 추가 */}
            <label htmlFor="period-input">{t('common:period')}</label>
            <input id="period-input" type="date" />
        </div>
    );
}

export default DateInput;
