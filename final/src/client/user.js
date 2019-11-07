export const getAll = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{ id: 1, name: 'juan' }, {
                id: 2,
                name: 'Patricia'
            }]);
        }, 1000);
    });
};