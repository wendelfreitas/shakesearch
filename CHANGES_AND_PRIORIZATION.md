<h1 align="center">
  <br>
  <img src="https://i.imgur.com/weGyiLq.png" alt="Shakesearch" height="200" width="200">
  <br><br>
  Changes & Priorization
</h1>

## Observations

So before I start to explain my changes and prioritization, I have a couple of observations to make.

- Maybe people see this project and think "much technology just for a challenge", but my goal with this challenge was to improve User Experience (UX) and Developer Experience (DX). So I created this project in the same way I create my own projects, with lints, tests, and some patterns.

- I deleted all the unused files from the original fork (`static` folder, go files, and `completeworks.txt`).

- I was reading the file in the backend, but when I made the first deploy into production, I saw some issues in Vercel Dashboard. So, I just put all the content of `completeworks.txt` into a constant variable in the project. I did some research about this issues, and Vercel does not support reading files in Functions Service, you can see more about this <a href="https://vercel.com/support/articles/how-can-i-use-files-in-serverless-functions#next.js" target="__blank">here</a>.

<br/>
<br/>

## Priorization

The items below are ordered by priority

- My first prioritization was to understand the challenge and check what kinda of data the file was giving to me.

- After that, I tried to organize the data in js from the `completeworks.txt` file, creating some helper functions to do this.

- So, I started to create components and pages based on some layouts I found to inspire myself. The firts was (`<SearchInput/>`, `<Logo/>`, and `<Home/>`).

- Then, I started refining the project.

<br/>
<br/>

## Changes

- I started this challenge creating the project using `Next.js` and adding some packages to create a boilerplate. So I added `Storybook` for component documentation, and other things to assure code quality, like `Eslint`, `Prettier`, `Jest` and other stuff like that.

- So, as the test for me was just frontend, I created a simple API rest to organize the data inside `completeworks.txt`. I started by transforming the data in a array, then I researched some patterns in the data. So, I created some functions with your own responsibilities. EG: (`getTitles`, `getLines` , `getCharacters`).

- After that, I used a package to index data in a deep search engine, according to the data I was organized. So the endpoint `/api/search?term={query}` was ready to use.

- So I started to create components with the following structure:

```bash
ComponentName
  /index.tsx
  /ComponentName.stories.tsx
  /ComponentName.test.tsx
```

- After all the pages and components were created, I started to improve the details of this project, like accessibility, performance, SEO, to get the results below:

<p align="center">
  <img src="https://imgur.com/6FfbvUZ.jpeg" width="400">
</p>

<p align="center">
  <img src="https://imgur.com/pgRcqqp.jpeg" width="600">
</p>

<p align="center">
  You can check this result,
  <a href="https://gtmetrix.com/reports/shakesearch.vercel.app/RH8KcZ31/" target="__blank">here<a/>.
</p>

Then, I started refining the project, adding documentation, improving accessibility, performance, SEO, and adding some tests with Jest.
