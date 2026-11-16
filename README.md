# cassidoo-2026-11-09

This is a solution to the interview problem sent in [the Nov 9th, 2026 issue of the rendezvous with cassidoo newsletter](https://cassidoo.co/newsletter/2026-11-08/) using TypeScript.

# Problem statement

Given `rounds` in a board game, where `rounds[r][p]` is the points player `p` earned in round `r`, find the earliest round from which the eventual winner is the sole leader at the end of every remaining round. Return the round number (1-based), or `-1` if the final score is tied.

## Example:

```
> comebackRound([
  [5, 3, 2],
  [0, 5, 2],
  [4, 2, 2],
  [1, 3, 0],
]);
> 2

> comebackRound([
  [4, 2],
  [1, 3],
  [2, 1],
]);
> 3

> comebackRound([
  [4, 2],
  [1, 3],
]);
> -1
```

# Solution

# React app

Run `npm run dev` to start the empty React app. Tailwind CSS is included for styling. Use `npm run build:app` to create a production build in `web-dist`.

## GitHub Pages

Followed instructions at https://vite.dev/guide/static-deploy to deploy to GitHub Pages.