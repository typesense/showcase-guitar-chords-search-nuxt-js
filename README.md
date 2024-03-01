<h1 align="center">
 🎸 Instant Guitar Chord Positions Search, powered by Typesense - NuxtJS
</h1>
<div align="center">
  <div><h3>Other versions</h3></div>
  <a href="https://github.com/typesense/showcase-guitar-chords-search-nuxt-js">NuxtJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-next-js">NextJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-angular">Angular 15</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-vanilla-js">Vanilla JS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-astro">Astro</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-solid-js">SolidJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-remix">Remix</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-svelte-kit">Sveltekit</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-qwik">Qwik</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-react-native">React Native</a>
</div>

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- NuxtJS
- Typescript
- Cypress

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

## Project Structure

```bash
/
├── scripts/
│   ├── data/
│   │   ├── guitar.json
│   │   └── schema.json
│   └── indexTypesense.ts # script that index data from guitar.json into typesense server
├── components/
│   └── UI components...
├── plugins/
│   └── vue-instantsearch.ts # vue-instantsearch setup
├── utils/
│   └── typesense.ts # typesense-instantsearch-adapter config
└── app.vue # guitar chords search
```

## Development

To run this project locally, make sure you have docker and nodejs, install the dependencies and start the dev server:

Installation

```shell
git clone https://github.com/typesense/showcase-guitar-chords-search-nuxt-js.git

cd showcase-guitar-chords-search-nuxt-js

npm i
```

Start typesense server

```shell
npm run start:typesense # or: docker compose up
```

Index data into typesense

```shell
npm run index:typesense
```

Start the dev web app

```shell
npm run dev
```

Open http://localhost:3000 to see the app ✌️

## Deployment

- Set env variables required in `nuxt.config.ts` to point the app to the Typesense Cluster
