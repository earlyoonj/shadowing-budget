import { useState } from 'react';
import { TRANSACTION_TYPE } from '../../constants/types';
import Category from '../../models/Category';
import TransactionList from './TransactionList';

const current = [
    {
        date: new Date(2022, 11, 29),
        logs: [
            {
                id: '01',
                isCurrent: true,
                isExpense: true,
                title: ['가맹점명', '내역명'],
                amount: 3000,
                category: new Category('01', '분류명', '💰', 60000),
            },
            {
                id: '02',
                isCurrent: true,
                isExpense: true,
                title: ['가맹점명', '내역명'],
                amount: 3000,
                category: new Category('01', '분류명', '💰', 60000),
                tags: ['태그명'],
            },
            {
                id: '03',
                isCurrent: true,
                isExpense: true,
                title: ['가맹점명', '내역명'],
                amount: 3000,
                category: new Category('01', '분류명', '💰', 60000),
            },
        ],
    },
    {
        date: new Date(2022, 11, 28),
        logs: [
            {
                id: '04',
                isCurrent: false,
                isExpense: true,
                title: ['예정명', '제목이 아주 길어진다면 어떻게 될까요'],
                amount: 300000,
                category: new Category('01', '분류명', '💰', 60000),
                tags: ['태그명', '태그명태그', '태그', '태그명태그명'],
            },
        ],
    },
];

const scheduled = [
    {
        date: new Date(2022, 11, 31),
        logs: [
            {
                id: '02',
                isCurrent: false,
                isExpense: true,
                title: ['예정명', '예정예정'],
                amount: 3000,
                category: new Category('01', '분류명', '💰', 60000),
                tags: [
                    '태그명',
                    '태그명태그',
                    '태그',
                    '태그태그',
                    '태그명태그명',
                ],
            },
        ],
    },
];

function TransactionLayout() {
    const [isCurrent, setIsCurrent] = useState(true);

    const clickScheduledHandler = () => {
        setIsCurrent(false);
    };

    const clickCurrentHandler = () => {
        setIsCurrent(true);
    };

    return (
        <div>
            <ul className="nav-tab">
                <li>
                    <input
                        id="transaction-list-scheduled"
                        type="radio"
                        name="transaction-list"
                    ></input>
                    <label
                        htmlFor="transaction-list-scheduled"
                        onClick={clickScheduledHandler}
                    >
                        예정 내역
                    </label>
                </li>
                <li>
                    <input
                        id="transaction-list-current"
                        type="radio"
                        name="transaction-list"
                        defaultChecked={true}
                    ></input>
                    <label
                        htmlFor="transaction-list-current"
                        onClick={clickCurrentHandler}
                    >
                        거래 내역
                    </label>
                </li>
            </ul>
            <TransactionList transactions={isCurrent ? current : scheduled} />
        </div>
    );
}

export default TransactionLayout;
