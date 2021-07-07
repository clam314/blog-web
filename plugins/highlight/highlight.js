import hljs from 'highlight.js'
import { initHllns } from '@/plugins/highlight/highlightjs-line-number'

export const initHljs = () => {
  initHllns(hljs)
  hljs.initHighlightingOnLoad()
  hljs.initLineNumbersOnLoad()
}
