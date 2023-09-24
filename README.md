# Notes
A tutorial with [mosh](https://youtu.be/ZVnjOPwW4ZA?si=dVyrj5JZYW3L98c6)

- `npx create-next-app@latest`
- `<Link>` will make much fewer requests because it only gets the new content, as opposed to `<a>`
- if a component needs user interaction or should be dynamically responding to user input and state then it needs to be client-side-rendered
    - Otherwise most components should be server-side-rendered
    - If a component needs to be client-side try to isolate the user / state interactive part and make that subcomponent client-side
    - More server side code means a faster, less memory, more SEO optimized website
- only page.tsx files are public. (ie. the user can't do link/users/secret.jpg)
- to make a component client-side-rendered add `'use client';` at the top of the file
    - all dependency components will also use client side rendering
- try to fetch data in the server side to avoid roundtrip to the backend.
- Next caches fetched data (may be problematic if the data is expected to change)
    - if data is supposed to change you can set a fresh time (how long cached data should be considered valid)
    -  `fetch(url, {cache: 'no-store'})` will not cache, and `fetch(url, {next: {revalidate: 10}})` will need to revalidate data every 10 seconds
- Static pages will be cached and rendered once at build time
    - Next.js automatically decides to render pages statically if no data is changing. So if a fetch is made and not cached then the page will be rendered at request time instead. (dynamic page)
    - with `npm run build` we can see which pages are rendered statically