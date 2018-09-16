const container = require('markdown-it-container')

export default md => {
  md.use(container, 'tabs', {
    render: (tokens, idx) => {
      const token = tokens[idx]

      if (token.nesting === 1) {
        return `<div class="vuepress-tabs"><tabs class="custome-tabs">\n`
      } else {
        return `</tabs></div>\n`
      }
    }
  })
}
