import { describe, it, expect } from 'vitest'
import {
  isEmpty,
  isExternal,
  isHttp,
  validEmail,
  validLowerCase,
  validAlphabets
} from './validate'

describe('validate.js 纯工具函数', () => {
  describe('isEmpty', () => {
    it('null / undefined / 空串 / "undefined" 判为空', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty('undefined')).toBe(true)
    })
    it('非空字符串返回 false', () => {
      expect(isEmpty('abc')).toBe(false)
      expect(isEmpty('0')).toBe(false)
    })
  })

  describe('isExternal', () => {
    it('http/https/mailto/tel 视为外链', () => {
      expect(isExternal('https://ruoyi.vip')).toBe(true)
      expect(isExternal('http://a.com')).toBe(true)
      expect(isExternal('mailto:a@b.com')).toBe(true)
      expect(isExternal('tel:10086')).toBe(true)
    })
    it('站内相对路径不是外链', () => {
      expect(isExternal('/system/user')).toBe(false)
      expect(isExternal('views/index.vue')).toBe(false)
    })
  })

  describe('isHttp', () => {
    it('包含 http:// 或 https:// 返回 true', () => {
      expect(isHttp('http://a.com')).toBe(true)
      expect(isHttp('https://a.com')).toBe(true)
    })
    it('相对路径返回 false', () => {
      expect(isHttp('/dev-api')).toBe(false)
    })
  })

  describe('validEmail', () => {
    it('合法邮箱通过', () => {
      expect(validEmail('admin@ruoyi.com')).toBe(true)
    })
    it('非法邮箱不通过', () => {
      expect(validEmail('abc')).toBe(false)
      expect(validEmail('a@b')).toBe(false)
    })
  })

  describe('validLowerCase / validAlphabets', () => {
    it('validLowerCase 只接受纯小写字母', () => {
      expect(validLowerCase('abc')).toBe(true)
      expect(validLowerCase('Abc')).toBe(false)
      expect(validLowerCase('abc1')).toBe(false)
    })
    it('validAlphabets 只接受纯字母', () => {
      expect(validAlphabets('AbC')).toBe(true)
      expect(validAlphabets('Ab1')).toBe(false)
    })
  })
})
