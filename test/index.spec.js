/* eslint-disable no-undef */
/*
 * @Description:
 * @Date: 2020-08-16 12:49:14 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-17 22:13:54 +0800
 * @LastEditors: JackChouMine
 */
const { sum } = require('../src/index')
test('sum', () => {
  expect(sum(10, 20)).toBe(30)
})
test('1 + 3 = 4', () => {
  expect(1 + 3).toBe(4)
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(2 === 7).toBeFalsy()
})

test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3) // 这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3) // 这句可以运行
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

test('the shopping list has beer on it', () => {
  expect([1, 2, 3]).toContain(1)
  expect([1, 2, 3]).not.toContain(4)
  expect(new Set(['beer'])).toContain('beer')
  expect('JackChou').toContain('Jack')
})


function compileAndroidCode () {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})

