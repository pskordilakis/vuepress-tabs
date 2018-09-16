const container = require('markdown-it-container')

export default md => {
  md.use(container, 'tab', {
    render: (tokens, idx) => {
      const token = tokens[idx]
      const attributes = token.info
        .trim()
        .slice('tab'.length)
        .trim()
        .split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g)
        .map(attr => {
          if (!attr.includes('=')) {
            if (!attr.startsWith('"')) {
              attr = `"${attr}`
            }

            if (!attr.endsWith('"')) {
              attr = `${attr}"`
            }

            return `name=${attr}`
          }

          return attr
        })
        .join(' ')

      if (token.nesting === 1) {
        return `<tab ${attributes}>\n`
      } else {
        return `</tab>\n`
      }
    }
  })
}
