import { useNavigate } from 'react-router-dom';
import classes from './PageForm.module.css';

function PageForm(props: {
    title: string;
    onSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
}) {
    const navigation = useNavigate();
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
                    onClick={() => navigation(-1)}
                >
                    취소
                </button>
                <button
                    type="submit"
                    className={`button__primary ${classes.button}`}
                >
                    완료
                </button>
            </div>
        </form>
    );
}

export default PageForm;
