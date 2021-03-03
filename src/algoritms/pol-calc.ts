/**
 * calc('7 2 * 3 +')    // 7 * 2 + 3 = 17
 * calc('7 2 3 * -')    // 7 - (2 * 3) = 1
 * calc('7 2 3 1 + * -') // 7 - 2 * (3 + 1) = -1
 *
 * calc('11 -12 -')       // 11 - -12 = 23
 * calc('7 2 3 1 * - - 3 5 + -') // 7 - (2 - 3 * 1) - 3 + 5 = 0
 *
 * calc('1 1 + +')      // Error in Syntax
 * calc('1 2 2 *')      // Error in Syntax
 * calc('1 b x + c -')    // Error in Operands
 */

function calc(input: string): number | never {
    enum operators {'+' = '+', '-' = '-', '*' = '*', '/' = '*'}

    const operate = (op: operators, a: number, b: number): number | never => {
        switch (op) {
            case operators['+']:
                return a + b;
            case operators['-']:
                return a - b;
            case operators['*']:
                return a * b;
            case operators['/']:
                return a / b;
        }
    }

    const result = input.split(' ').reduce((res: number[], el) => {
        if (el in operators) {
            const b = res.pop();
            const a = res.pop();

            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new SyntaxError('Error in Syntax');
            }

            res.push(operate(operators[el], a, b));
        } else if (!Number.isNaN(Number(el))) {
            res.push(Number(el));
        } else {
            throw new Error('Error in Operands');
        }
        return res;
    }, new Array<number>());

    if (result.length > 1) {
        throw new SyntaxError('Error in Syntax');
    }
    return result[0];
}

console.log(calc('7 2 * 3 +'));    // 7 * 2 + 3 = 17
console.log(calc('7 2 3 * -'));    // 7 - (2 * 3) = 1
console.log(calc('7 2 3 1 + * -')); // 7 - 2 * (3 + 1) = -1

console.log(calc('11 -12 -'));       // 11 - -12 = 23
console.log(calc('7 2 3 1 * - - 3 5 + -')); // 7 - (2 - 3 * 1) - 3 + 5 = 0

console.log(calc('1 1 + +'));      // Error in Syntax
console.log(calc('1 2 2 *'));     // Error in Syntax
console.log(calc('1 b x + c -'));    // Error in Operands
