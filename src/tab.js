const container = require('markdown-it-container')

import { tabAttributes } from './util'

export default md => {
  md.use(container, 'tab', {
    render: (tokens, idx) => {
      const token = tokens[idx]
      const attributes = tabAttributes(token.info)

      if (token.nesting === 1) {
        return `<tab ${attributes}>\n`
      } else {
        return `</tab>\n`
      }
    }
  })
}
