import classes from './OverlayForm.module.css';

function OverlayForm(props: {
    onSubmit: (event: React.FormEvent) => void;
    isShowBackdrop?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <>
            {props.isShowBackdrop ? (
                <div className={classes.backdrop}></div>
            ) : null}
            <form className={classes.overlay} onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </>
    );
}

export default OverlayForm;
