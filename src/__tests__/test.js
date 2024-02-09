import { calcTotal } from '../calculate.js';

test('calcTotal sum without discount', () =>{
    const list = [
        {
            id: 456,
            name: 'Война и Мир',
            count: 3,
            price: 400
        },
        {
            id: 77,
            name: 'JavaScript PRO',
            count: 1,
            price: 1300
        }
    ];

    const result = calcTotal(list);
    expect(result).toBe(2500);
});

test('calcTotal sum with discount', () =>{
    const list = [
        {
            id: 456,
            name: 'Война и Мир',
            count: 3,
            price: 401
        },
        {
            id: 77,
            name: 'JavaScript PRO',
            count: 1,
            price: 1300
        }
    ];

    const result = calcTotal(list, true);
    expect(result).toBeCloseTo(2230.173);
});