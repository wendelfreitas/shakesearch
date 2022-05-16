<h1 align="center">
  <br>
  <img src="https://i.imgur.com/weGyiLq.png" alt="Shakesearch" height="200" width="200">
  <br><br>
  Shakesearch
</h1>

<p align="center">A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works.</p>

<p align="center"><i>"Find, or not find, that is the question." - ?</i> </p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/contribuition-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://saythanks.io/to/wendelfreitas">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
<a href="https://www.repostatus.org/#wip"><img src="https://www.repostatus.org/badges/latest/wip.svg" alt="Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public." /></a>
</p>

<h2>How to Run?</h2>

You don't need env vars because all the data is in the project already.

So just follow the steps below

```bash
# Install Dependencies
$ yarn install or yarn

# Run Application (Go to http://localhost:3000/ to see the result)
$ yarn dev

```

<h2>Want to see code quality and lint warnings?</h2>

```bash
# Install Dependencies if you dont did this already
$ yarn install or yarn

# Run linters using package script
$ yarn lint

# You will get this
✔ No ESLint warnings or errors
✨  Done in 3.97s.
```

<h2>You want to check the code coverage?</h2>

```bash
# Install Dependencies if you dont did this already
$ yarn install or yarn

# Run Jest using package script
$ yarn test

# You probably will get this

--------------------------------------|---------|----------|---------|---------|-------------------
File                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines
--------------------------------------|---------|----------|---------|---------|-------------------
All files                             |   96.46 |     80.3 |   91.46 |   96.41 |
 components/Footer                    |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 components/Logo                      |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 components/Pagination                |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 components/ResultItem                |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 components/SearchInput               |   78.78 |       48 |   56.25 |   78.78 |
  index.tsx                           |   73.68 |       48 |   44.44 |   73.68 | 57-98
  styles.ts                           |   85.71 |      100 |   71.42 |   85.71 | 100,115
 hooks/use-key-down                   |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 hooks/use-search                     |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 pages                                |     100 |      100 |     100 |     100 |
  404.tsx                             |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 pages/sonnets                        |     100 |      100 |     100 |     100 |
  [id].tsx                            |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 pages/titles                         |     100 |      100 |     100 |     100 |
  [id].tsx                            |     100 |      100 |     100 |     100 |
 templates/404                        |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 templates/Home                       |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 templates/Layout                     |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 templates/Sonnet                     |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
  styles.ts                           |     100 |      100 |     100 |     100 |
 templates/Sonnets                    |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 templates/Title                      |     100 |      100 |     100 |     100 |
  index.tsx                           |     100 |      100 |     100 |     100 |
 utils                                |     100 |      100 |     100 |     100 |
  constants.ts                        |     100 |      100 |     100 |     100 |
  database.ts                         |       0 |        0 |       0 |       0 |
 utils/helpers/get-contents-sanitized |     100 |      100 |     100 |     100 |
  index.ts                            |     100 |      100 |     100 |     100 |
 utils/helpers/get-sonnets            |     100 |      100 |     100 |     100 |
  index.ts                            |     100 |      100 |     100 |     100 |
 utils/helpers/get-titles             |     100 |      100 |     100 |     100 |
  index.ts                            |     100 |      100 |     100 |     100 |
 utils/helpers/paginate               |     100 |      100 |     100 |     100 |
  index.ts                            |     100 |      100 |     100 |     100 |
 utils/tests                          |     100 |      100 |     100 |     100 |
  helper.tsx                          |     100 |      100 |     100 |     100 |
--------------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 21 passed, 21 total
Tests:       64 passed, 64 total
Snapshots:   0 total
Time:        3.512 s
Ran all test suites.
✨  Done in 5.15s.
```

## :handshake: **Contributing**

This project is just for Pulley company challenge purposes.

But you can do this:

- ⭐️ Star the project
- 🐛 Find and report issues
- 📥 Submit PRs to help solve issues or add features

<br>
<p align="center">Created with ❤︎ by Wendel Freitas </p>
