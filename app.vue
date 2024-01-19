<script>
export default {
  data() {
    return {
      searchClient: typesenseInstantsearchAdapter().searchClient,
    };
  },
};
</script>
<template>
  <main class="main">
    <Heading />
    <ais-instant-search
      index-name="guitar-chords"
      :search-client="searchClient"
    >
      <SearchAndFilter />
      <ais-configure :hitsPerPage="12" />
      <InfiniteHits />
    </ais-instant-search>
  </main>
</template>

<style>
:root {
  /* @link https://utopia.fyi/type/calculator?c=320,15,1.25,1240,20,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
  --step--2: clamp(0.6rem, 0.5913rem + 0.0435vw, 0.625rem);
  --step--1: clamp(0.75rem, 0.7035rem + 0.2326vw, 0.8838rem);
  --step-0: clamp(0.9375rem, 0.8288rem + 0.5435vw, 1.25rem);
  --step-1: clamp(1.1719rem, 0.9647rem + 1.0359vw, 1.7675rem);
  --step-2: clamp(1.465rem, 1.1052rem + 1.7989vw, 2.4994rem);
  --step-3: clamp(1.8313rem, 1.2391rem + 2.9609vw, 3.5338rem);
  --step-4: clamp(2.2888rem, 1.3468rem + 4.7098vw, 4.9969rem);
  --step-5: clamp(2.8613rem, 1.3989rem + 7.312vw, 7.0656rem);

  --100: #fff;
  --200: #fafafa;
  --300: #e4e4e4;
  --400: #ababab;
  --500: #363637;
  --600: #252529;
  --700: #1e1e20;
  --800: #1b1b1f;
  --900: #161618;
  --txt-200: rgba(255, 255, 245, 0.86);
  --txt-300: rgba(235, 235, 235, 0.6);
  --accent: #ed0e73;
  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #ed0e73 0deg,
    hsla(210, 100%, 52%, 0.2) 55deg,
    #54d6ff33 140deg,
    #00dc8069 160deg,
    transparent 360deg
  );

  --pad-top: 1rem;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  color: var(--700);
  background-color: var(--100);
}

a {
  color: inherit;
  text-decoration: none;
}
a,
button {
  cursor: pointer;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(3rem + 3.5vmax) 1rem;
  min-height: 100vh;
  min-height: 100dvh;
  gap: 5rem;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: relative;
}
.ais-InstantSearch {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 2rem;
  min-height: 474px;
}

.ais-InfiniteHits-loadMore,
.ais-RefinementList-showMore {
  padding: 6px 12px;
  border-radius: 5px;
  color: var(--700);
  background-color: #fff0;
  border: 1px solid var(--700);
  transition: all 0.25s;
}
.ais-InfiniteHits-loadMore:hover,
.ais-RefinementList-showMore:hover {
  background-color: var(--700);
  color: var(--100);
}
.ais-RefinementList-showMore:disabled {
  display: none;
}
</style>
