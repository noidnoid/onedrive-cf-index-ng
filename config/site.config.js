/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // 用来识别你的 OneDrive 账号，可以用环境变量覆盖
  userPrincipalName: process.env.USER_PRINCIPLE_NAME || 'noid@dvu.me',

  // 导航栏左侧的小图标，放在 /public 目录下
  icon: '/icons/128.png',

  // 网站标题
  title: "noid's OneDrive",

  // 公开共享的 OneDrive 目录：这里改成根目录下的 /share 文件夹
  baseDirectory: process.env.BASE_DIRECTORY || '/share',

  // 每页最多显示的项目数量（OneDrive API 上限是 200）
  maxItems: 100,

  // Google 字体配置
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: [
    'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap',
  ],

  // 页脚 HTML
  footer:
    'Powered by <a href="https://github.com/lyc8503/onedrive-cf-index-ng" target="_blank" rel="noopener noreferrer">onedrive-cf-index-ng</a>. Made with ❤ by lyc8503.',

  // 需要密码保护的目录（按需改）
  protectedRoutes: ['/Private', '/file', '/Demo/😎Another Private Folder Password 123'],

  // 导航栏显示的邮箱（留空字符串则不显示）
  email: 'mailto:noid@dvu.me',

  // 社交链接
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/lyc8503',
    },
  ],

  // 时间格式（day.js 格式）
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',

  // OPDS 电子书目录配置（如不用可保持 disabled）
  opds: {
    enabled: false,
    title: "noid's OneDrive",
    description: 'OPDS catalog powered by onedrive-cf-index-ng.',
    fileExtensions: ['.epub', '.pdf', '.mobi', '.azw3', '.azw', '.cbz', '.cbr'],
  },
}
