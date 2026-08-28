# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hugo portfolio site. Main content is stored as Markdown under `content/`, organized by portfolio topic (for example, `content/posts/portfolio/React/`). Site configuration lives in `hugo.toml` and `config/_default/`. Custom templates are in `layouts/`, reusable source assets in `assets/`, and static files in `static/`. The Blowfish theme is included as the `themes/blowfish` Git submodule. `public/` contains generated site output and is currently checked in; update it only when the project workflow requires regenerated output.

## Build, Test, and Development Commands

Install the theme before working from a fresh clone:

```bash
git submodule update --init --recursive
```

Use Hugo locally to preview and build the site:

```bash
hugo server -D       # Run the development server, including drafts
hugo --gc --minify   # Generate the production site in public/
```

`.github/workflows/static.yml` builds and deploys to GitHub Pages on pushes to `main`. It pins Hugo, Go, Node.js, and Dart Sass; use those versions when reproducing CI issues. There is no separate test suite or package manager configuration. Treat a successful Hugo production build as the primary verification.

## Coding Style & Naming Conventions

Write content in Markdown with Hugo front matter matching nearby posts. Keep front matter keys consistent and prefer descriptive lowercase filenames with underscores where that convention already exists (for example, `week_2_notes.md`). Preserve established directory capitalization. Use two spaces for TOML/YAML indentation and keep templates readable with focused changes.

## Testing Guidelines

Before submitting changes, run `hugo --gc --minify` and inspect affected pages with `hugo server -D`. Check links, front matter, images, and navigation. No coverage threshold is defined.

## Commit & Pull Request Guidelines

Existing commits are short, lowercase, and informal (for example, `revamping my portfolios`). Follow that concise style with a specific subject, such as `add week 4 React notes`. Pull requests should explain the change, identify affected paths, mention build verification, and include screenshots for visual changes. Keep generated `public/` changes synchronized when intended.

## Security & Configuration Tips

Never commit API keys or other secrets. The Dify synchronization workflow uses GitHub Actions variables and secrets (`DIFY_BASE_URL`, `DIFY_DATASET_ID`, and `DIFY_API_KEY`); configure them in repository settings rather than in Markdown or workflow source.
