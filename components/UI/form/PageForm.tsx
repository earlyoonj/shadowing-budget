import classes from '../../../styles/PageForm.module.css';

import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

function PageForm(props: {
    title: string;
    onSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
}) {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <form className={`page ${classes.form}`} onSubmit={props.onSubmit}>
            <div>
                <h2>{props.title}</h2>
                {props.children}
            </div>
            <div className={classes.buttons}>
                <button
                    type="button"
                    className={classes.button}
                    onClick={() => router.back()}
                >
                    {t('common:cancel')}
                </button>
                <button
                    type="submit"
                    className={`button__primary ${classes.button}`}
                >
                    {t('common:confirm')}
                </button>
            </div>
        </form>
    );
}

export default PageForm;
