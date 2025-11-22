// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// GitHub Pages 用に base をリポジトリ名に設定
export default defineConfig({
	base: '/portfolio/', // GitHub Pages の URL に合わせる
    site: 'https://leek-0113.github.io/portfolio/', // 公開サイト URL
	integrations: [mdx(), sitemap()],
});
