/**
 * index 内放置暴露给外部使用的，不想暴露的单独引用
 */
import { createElement, createVnode } from './jsx'
import md5 from './md5'

export default {
  createElement,
  md5,
  createVnode
}