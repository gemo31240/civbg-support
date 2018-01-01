module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'civbg-support',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Civilization Board Game tech-tree support'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['bootstrap-vue', 'firebase', 'vuexfire']
  },
  /**
   * Plugins
   */
  plugins: ['~plugins/bootstrap-vue', '~plugins/firebase']
}
