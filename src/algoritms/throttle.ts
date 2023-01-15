/**
 * throttle.
 *
 * Напишите функцию throttle(fn, delay, ctx) – «тормозилку», которая возвращает обёртку,
 * вызывающую fn не чаще, чем раз в delay миллисекунд.
 * В качестве контекста исполнения используется ctx.
 * Если игнорируемый вызов оказался последним, то он должен выполниться.
 */

class Foo {
  constructor(private b = '') {}

  concat(a) {
    console.log(a + this.b);
  }
}

const foo = new Foo(' call');

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(foo.concat, 1000, foo);
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
f1000(4); // (тормозим, не прошло 1000 мс)
f1000(5); // (тормозим, не прошло 1000 мс)

function throttle(fn: (...args: any[]) => void, delay: number, ctx?: unknown) {
  let lastArgs: unknown[] | undefined;
  let trottled = false;

  return (...args: any[]): void => {
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
  };
}
