<script>
import Chord from '@tombatossals/react-chords/lib/Chord';
import { applyReactInVue } from 'veaury';

export default {
  data() {
    return {
      searchClient: typesenseInstantsearchAdapter.searchClient,
    };
  },
  components: {
    Chord: applyReactInVue(Chord),
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
      <ais-infinite-hits :show-previous="false">
        <template v-slot:item="{ item }">
          {{ item.key + item.suffix }}
          <Chord
            :chord="item.positions[0]"
            :instrument="{
              strings: 6,
              fretsOnChord: 4,
              name: 'Guitar',
              keys: [],
              tunings: {
                standard: ['E', 'A', 'D', 'G', 'B', 'E'],
              },
            }"
          />
        </template>
      </ais-infinite-hits>
    </ais-instant-search>
  </main>
</template>
