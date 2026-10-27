import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages uses /repository-name/; local dev and custom domains use /.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const user = process.env.GITHUB_REPOSITORY?.split('/')[0];
const projectSite = Boolean(repo && user && repo.toLowerCase() !== `${user.toLowerCase()}.github.io`);
export default defineConfig({
  site: user ? `https://${user}.github.io` : 'http://localhost:4321',
  base: projectSite ? `/${repo}/` : '/',
  vite: { plugins: [tailwindcss()] },
});
