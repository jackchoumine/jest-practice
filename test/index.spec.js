/* eslint-disable no-undef */
/*
 * @Description:
 * @Date: 2020-08-16 12:49:14 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-16 13:54:41 +0800
 * @LastEditors: JackChouMine
 */
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