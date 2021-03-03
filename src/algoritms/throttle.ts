/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

function f(a) {
    // @ts-ignore
    console.log(a + this.b);
}

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(f, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
f1000(4); // (тормозим, не прошло 1000 мс)
f1000(5); // (тормозим, не прошло 1000 мс)

function throttle(fn: (...args) => void, delay: number, ctx: any) {
    let lastArgs: any;
    let trottled: boolean = false;

    return (...args): void => {
        if (trottled) {
            lastArgs = args;
            return;
        }

        fn.call(ctx, ...args);

        trottled = true;

        setTimeout(() => {
            trottled = false;
            if (lastArgs) {
                fn.call(ctx, ...lastArgs);
                lastArgs = undefined;
            }
        }, delay);
    }
}
