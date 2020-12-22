const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => {
        return {
          mode: [Mode.VUE_COMPONENT]
        }
      }),
    config.plugin('html')
      .tap(args => {
        args[0].meta = {
           description: 'my bio in two mouse clicks or less'
        }
        return args
      })
  }
}
