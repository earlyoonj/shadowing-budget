import classes from './AmountDetail.module.css';

function AmountDetail(props) {
    const amounts = props.amounts;
    
    return (
        <ul className={classes.amount}>
            {/* {props.amounts.map((item, i) => {
                return (
                    <li className={classes.amountItem}>
                        <div className={classes.controls}>
                            <input
                                type="checkbox"
                                style={{ backgroundcolor: item.color }}
                            ></input>
                            <label>{item.label}</label>
                        </div>
                        <span className={classes.amountString}>
                            {item.amount.toLocaleString()}원
                        </span>
                    </li>
                );
            })} */}
        </ul>
    );
}

export default AmountDetail;
