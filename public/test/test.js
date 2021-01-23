'use strict';

const expectExport = require("expect/build/");

describe('足し算', () => {
  test('1たす3は４です', () => {
    const result = 1 + 3;
    expect(result).toBe(4);
  });

  test.skip('2.0足す3.0は5.0です', () => { });

  describe('変数を使用', () => {
    let beforeAllSumResult = 100;
    let beforeEachSumResult = 100;

    beforeAll(() => {
      beforeAllSumResult = beforeAllSumResult + 33;
    });

    afterAll(() => {
      beforeAllSumResult = 100;
    });

    beforeEach(() => {
      beforeEachSumResult = beforeEachSumResult + 33;
    });

    afterEach(() => {
      beforeEachSumResult = beforeEachSumResult - 33;
    });

    test('100に33を足すと133になる', () => {
      expect(beforeAllSumResult).toBe(133);
    });

    test('100に33を足すと133になる', () => {
      expect(beforeEachSumResult).toBe(133);
    });
  });
  describe('引き算との足し算', () => {
    test('-1たす3は2になる', () => {
      const result = -1 + 3;
      expect(result).toBe(2);
    })
  })
});