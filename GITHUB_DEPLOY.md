# Deploy DS67HomeWorkshop to GitHub Pages

1. Create a **public** repository named `ds67homeworkshop` on GitHub (without initializing README).
2. From this folder: `npm install` and `npm run build`.
3. Run `git init`, `git add .`, `git commit -m "Deploy DS67HomeWorkshop"`, `git branch -M main`.
4. Run `git remote add origin https://github.com/USERNAME/ds67homeworkshop.git`, replace USERNAME with your GitHub username.
5. Run `git push -u origin main` (authentication required).
6. In GitHub go to Settings > Pages > Build and deployment > Source: GitHub Actions.
7. Check the Actions tab. Site URL: `https://USERNAME.github.io/ds67homeworkshop/`.

The base path is detected from the GitHub Actions GITHUB_REPOSITORY variable; if repository is `USERNAME.github.io`, base becomes `/`.

Before public launch, supply owner photo and real WhatsApp number in `src/data/site.ts`. Illustrative photos are externally hosted and testimonials must not be presented as verified customer reviews.
