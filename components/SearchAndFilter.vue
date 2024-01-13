<template>
  <aside class="SearchAndFilter">
    <h2>Filter results</h2>
    <ais-search-box placeholder="Search..." />
    <h3>Key</h3>
    <ais-refinement-list attribute="key" :sort-by="['name']" />
    <h3>Suffix</h3>
    <ais-refinement-list attribute="suffix" :sort-by="['name']" :limit="100" />
    <h3>Capo</h3>
    <ais-refinement-list attribute="positions.capo" />
  </aside>
</template>

<style>
.SearchAndFilter {
  position: sticky;
  top: 0;
  left: 0;
  min-width: 15vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  height: fit-content;

  h2 {
    font-size: var(--step-0);
  }
  h3 {
    font-size: calc(var(--step-0) - 0.1vmax);
  }
}
/* // Search box */
.ais-SearchBox-form {
  height: 32px;
  display: flex;
  align-items: center;
  position: relative;
  button {
    padding: 0 0.75rem 0 0.5rem;
    background-color: #fff0;
    border: none;
    position: absolute;
    right: 0;
  }
}
.ais-SearchBox-loadingIndicator {
  display: none !important;
}
.ais-SearchBox-input {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: var(--100);
  border: 1px solid var(--400);
  padding: 0 1rem 0 0.5rem;
  color: var(--700);
  &::-webkit-search-cancel-button {
    display: none;
  }
}
.ais-SearchBox-submit {
  display: none;
}
/* // Refinement */
.ais-RefinementList-label {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: var(--200);
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: var(--300);
  }
  .ais-RefinementList-checkbox {
    margin-right: 0.5rem;
    accent-color: var(--accent);
  }
  .ais-RefinementList-count {
    margin-left: auto;
    font-size: var(--step--1);
  }
}

.ais-RefinementList-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
