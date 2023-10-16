import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@rc-component/async-validator$': path.resolve('src'),
    '@rc-component/async-validator/es': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: '@rc-component/async-validator',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.docs-dist',
});
