export const memoize = (fn, ctx = null) => {
    const cached = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cached.has(key)) {
            cached.set(key, fn.call(ctx, ...args));
        }
        return cached.get(key);
    };
};
