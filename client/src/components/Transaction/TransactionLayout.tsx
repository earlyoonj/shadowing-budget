import { useState } from 'react';
import { TRANSACTION_TYPE } from '../../constants/types';
import Category from '../../models/Category';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import TransactionNav from './TransactionNav';

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
    const [isCurrent, setIsCurrent] = useState(false);

    const clickScheduledHandler = () => {
        setIsCurrent(false);
    };

    const clickCurrentHandler = () => {
        setIsCurrent(true);
    };

    const submitHandler = (event: React.FormEvent, isExpense: boolean) => {
        event.preventDefault();
        console.log(isExpense);
    };

    return (
        <section>
            <TransactionNav
                isCurrent={isCurrent}
                onClickScheduled={clickScheduledHandler}
                onClickCurrent={clickCurrentHandler}
            />
            <TransactionList transactions={isCurrent ? current : scheduled} />
            <TransactionForm
                isCurrent={isCurrent}
                onClickScheduled={clickScheduledHandler}
                onClickCurrent={clickCurrentHandler}
                onSubmit={submitHandler}
            />
        </section>
    );
}

export default TransactionLayout;
