import classes from './TransactionItem.module.css';
import Category from '../../models/Category';
import Tag from '../UI/Tag';
import { Link } from 'react-router-dom';

function TransactionItem(props: {
    id: string;
    isCurrent: boolean;
    isExpense: boolean;
    icon?: string;
    title: string[];
    amount: number;
    category?: Category;
    tags?: string[];
}) {
    const icon = props.icon
        ? props.icon
        : props.category
        ? props.category.icon
        : '';

    return (
        <li className={classes.item}>
            <Link to={props.id}>
                <div className={classes.info}>
                    <span className={classes.icon}>{icon}</span>
                    <div className={classes.detail}>
                        <div className={classes.header}>
                            <p className={classes.category}>
                                {props.category ? props.category.title : ''}
                            </p>
                            <p className={classes.title}>
                                {props.title.join(' | ')}
                            </p>
                        </div>
                        <div className={classes.amount}>
                            {props.amount.toLocaleString() + '원'}
                        </div>
                    </div>
                </div>
                <div className={classes.tags}>
                    {props.tags
                        ? props.tags.map((tag: string) => {
                              return <Tag key={tag}>{tag}</Tag>;
                          })
                        : null}
                </div>
            </Link>
        </li>
    );
}

export default TransactionItem;
