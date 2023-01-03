import classes from './TransactionItem.module.css';
import Category from '../../models/Category';
import Tag from '../UI/Tag';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigation = useNavigate();
    const [isShowOverlay, setIsShowOverlay] = useState(false);

    const icon = props.icon
        ? props.icon
        : props.category
        ? props.category.icon
        : '';

    const clickHandler = () => {
        navigation('/budget/01/01');
        setIsShowOverlay(true);
    };

    return (
        <li className={classes.item} onClick={clickHandler}>
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
        </li>
    );
}

export default TransactionItem;
