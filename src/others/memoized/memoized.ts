const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 1000);
    });
};

const memoize = (callback, limit) => {
    const cached = {
        result: undefined,
        start: undefined,
        ...limit,
    };

    cached.limit = limit;
    return async (...args) => {
        const now = Date.now();
        let result;

        if (
            typeof cached.result !== 'undefined' &&
            typeof cached.start === 'number' &&
            (now - cached.start) < limit
        ) {
            result = cached.result;
        } else {
            result = await callback(...args);
            cached.result = result;
            cached.start = Date.now();
        }
        console.log(cached);
        return result;
    };
};

let memoized = memoize(getData, 1000);

memoized()
    .then(data1 => console.log(data1)) // получаем долго
    .then(memoized)
    .then(data2 => console.log(data2)) // получаем быстро, из кеша
    .then(memoized)
    .then(data3 => console.log(data3))
    .catch(e => console.log(e))
    .then();
