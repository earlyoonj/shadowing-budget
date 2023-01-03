import classes from './Tag.module.css';

function Tag(props: { children: React.ReactNode }) {
    return <span className={classes.tag}>#{props.children}</span>;
}

export default Tag;
