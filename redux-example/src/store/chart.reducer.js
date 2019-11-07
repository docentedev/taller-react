const initialState = {
    data: [{
            label: 'Series 1',
            data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
            ]
        },
        {
            label: 'Series 2',
            data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4]
            ]
        }
    ],
    axes: [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ],
};

/**
 * 
 * @param {*} prevState 
 * @param {*} action 
 * @param {string} action.type
 * @param {*} action.payload
 */
const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'chart/add':
            const list = prevState.data[0].data;
            list.push(action.payload);
            const newData = {
                ...prevState.data[0],
                data: list,
            };
            return {
                ...prevState,
                data: [newData, prevState.data[1]]
            };
        default:
            return prevState;
    }
};

export default counterReducer;