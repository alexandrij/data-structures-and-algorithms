export const cached = new Map();
export const memoize = (fn, ctx = null) => {
    return (...args) => {
        const key = JSON.stringify(args);
        if (!cached.has(key)) {
            cached.set(key, fn.call(ctx, ...args));
        }
        return cached.get(key);
    };
};
