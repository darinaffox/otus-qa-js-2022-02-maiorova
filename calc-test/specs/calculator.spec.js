import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
  it("2 + 2 = 4", () => {
    expect(calculator(2, '+', 2)).toBe(4)
  });
  it("2 - 2 = 0", () => {
    expect(calculator(2, '-', 2)).toBe(0)
  });
  it("1 * 2 = 2", () => {
    expect(calculator(1, '*', 2)).toBe(2)
  });
  it("6 / 2 = 3", () => {
    expect(calculator(6, '/', 2)).toBe(3)
  });
  it('throw error when operand A is not a number', () => {
    expect(() => calculator('R', '+', 2)).toThrow();
  });
  it('throw error when operand B is not a number', () => {
    expect(() => calculator(4, '+', '!')).toThrow();
  });
  it('throw error when operator is incorrect', () => {
    expect(() => calculator(4, 'R', 2)).toThrow();
  });
  test.each`
    a      | op     | b      | expected
    ${2}   | ${'*'} | ${2}   | ${4}
    ${2}   | ${'+'} | ${2}   | ${4}
    ${2}   | ${'/'} | ${2}   | ${1}
    ${2}   | ${'-'} | ${2}   | ${0}
    ${'E'} | ${'*'} | ${2}   | ${'error'}
    ${2}   | ${'+'} | ${'?'} | ${'error'}
    ${2}   | ${'&'} | ${2}   | ${'error'}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});
