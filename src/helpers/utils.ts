import { type } from 'os'

const toString = Object.prototype.toString

// ts 谓词保护
/**
 * 是否为日期
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
/**
 * @Deprecated 是否为对象
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
/**
 * 是否为普通对象
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// 混合对象
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}

// 深拷贝
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
