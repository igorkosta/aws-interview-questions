const {
  title,
  description,
  repository: { url: repo }
} = require('../../package')

module.exports = {
  base: '/aws-interview-questions/',
  title,
  description,
  theme: 'default-prefers-color-scheme',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    defaultTheme: 'dark',
    logo: '/aws-logo.png',
    repo,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Base',
        link: '/base/',
      }
    ],
    sidebar: {
      '/base/': [
        {
          title: 'Base',
          collapsable: false,
          children: [
            '',
            '3-tier-architecture',
            'udp-tcp-ip',
            'rest',
            'databases',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
