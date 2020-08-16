<!--
 * @Description: 
 * @Date: 2020-08-16 12:54:57 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-16 13:53:46 +0800
 * @LastEditors: JackChouMine
-->
# Jest 前端测试学习

## 环境搭建
安装 `jest`
```bash
npm i -D jest
```
安装了`26.4.0`版本的jest：
```json
{
  "name": "jest-practice",
  "version": "1.0.0",
  "description": "Jest 前端测试框架学习",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^26.4.0"
  }
}
```

编写测试用例 `test/index.spec.js`
```js
test('1 + 3 = 4', () => {
  expect(1 + 3).toBe(4)
})
```
运行`npm run test`,没有报错，显示通过的用例，就搭建好了测试环境。
`test` 函数的第一个参数是字符串，对用例的说明，expect 返回一个期望对象，`toBe`是一个匹配器。
当 Jest 运行时，它会跟踪所有失败的匹配器，以便它可以为你打印出很好的错误消息。
`toBe`使用`Object.is` 来测试精确相等，如果想检测对象的值相等，使用`toEqual`,递归检测对象或者数组的每个字段是否相等。`not.toBe` 和 `toBe`匹配器。

## 使用匹配器

匹配器是一种断言，可使用匹配器来测试你的函数期望返回的结果，和期望一致，则测试通过，否不通过。

### 真值匹配器

在测试中， `undefined`、`null`、`false`都是假值，我们往往需要精确知道一个假值是什么，有以下匹配器：
- toBeNull 只匹配 null
- toBeUndefined 只匹配 undefined
- toBeDefined 与 toBeUndefined 相反
- toBeTruthy 匹配任何 if 语句为真
- toBeFalsy 匹配任何 if 语句为假

### 数字

数学比较里有`>`、`>=`、`<`、`<=`，也有对应的比较器：
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBe 精确相等
- toBeCloseTo 浮点数近似相等，计算机精度有限，无法判断浮点数精确相等

`NaN`、`Infinity` 等特殊数字，有匹配器吗？

