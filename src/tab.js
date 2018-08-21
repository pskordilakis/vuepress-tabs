const container = require('markdown-it-container')

export default md => {
  md.use(container, 'tab', {
    render: (tokens, idx) => {
      const token = tokens[idx]
      const info = token.info.trim().slice('tab'.length).trim()

      if (token.nesting === 1) {
        return `<tab name="${info}">\n`
      } else {
        return `</tab>\n`
      }
    }
  })
}
