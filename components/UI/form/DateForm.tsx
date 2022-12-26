import useTranslation from 'next-translate/useTranslation';
import Calendar from '../Calendar';
import OverlayForm from './OverlayForm';

function DateForm() {
    const { t } = useTranslation();
    const submitHandler = () => {};
    const cancelHandler = () => {};
    return (
        <OverlayForm
            title={t('common:period')}
            onSubmit={submitHandler}
            onCancel={cancelHandler}
        >
            <Calendar onClick={() => {}} />
        </OverlayForm>
    );
}

export default DateForm;
