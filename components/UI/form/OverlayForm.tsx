import classes from '../../../styles/OverlayForm.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
function OverlayForm(props: {
    title: string;
    onSubmit: (event: React.FormEvent) => void;
    onCancel: (event: React.MouseEvent) => void;
    children: React.ReactNode;
}) {
    const { t } = useTranslation();
    return (
        <Fragment>
            {/** TODO: 포탈로 보내기 */}
            <div className={classes.backdrop}></div>
            <form className={classes.form} onSubmit={props.onSubmit}>
                <h3>{props.title}</h3>
                {props.children}
                <div className={classes.buttons}>
                    <button type="button" onClick={props.onCancel}>
                        {t('common:cancel')}
                    </button>
                    <button type="submit">{t('common:confirm')}</button>
                </div>
            </form>
        </Fragment>
    );
}

export default OverlayForm;
