# 🎸 Instant Guitar Chord Positions Search, powered by Typesense

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- Nuxt. There is also a [NextJS version](https://github.com/phiHero/typesense-guitar-chords-nextjs)
- Typescript
- Cypress

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

## Repo structure

- `components/` contains UI components
- `scripts/` contains file to index data from `scripts/data` into Typesense

## Development

To run this project locally, make sure you have docker and nodejs, install the dependencies and run the local server:

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

