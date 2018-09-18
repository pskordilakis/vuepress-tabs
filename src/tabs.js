const container = require('markdown-it-container')
import { tabsAttributes } from './util'

export default md => {
  md.use(container, 'tabs', {
    render: (tokens, idx) => {
      const token = tokens[idx]
      const attributes = tabsAttributes (token.info)

      if (token.nesting === 1) {
        return `<div class="vuepress-tabs"><tabs ${attributes}>\n`
      } else {
        return `</tabs></div>\n`
      }
    }
  })
}
