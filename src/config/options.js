const amountOptions = {
    current: {
        index: 0,
        label: {
            default: '거래금액',
            over: '초과 거래금액',
        },
        color: {
            default: '#0e0e0e',
            over: '#ef5e5e',
        },
        amount: 0,
    },
    scheduled: {
        index: 1,
        label: {
            default: '남은 예정금액',
            over: '초과 예정금액',
        },
        color: {
            default: '#eaeaea',
            over: '#f3c1c1',
        },
        amount: 0,
    },
    budget: {
        index: 2,
        label: {
            default: '남은예산',
            over: '',
        },
        color: {
            default: '#f6f6f6',
            over: '',
        },
        amount: 0,
    },
};

export { amountOptions };
