<script setup>
import ReactChord from '@tombatossals/react-chords/lib/Chord';
import { applyReactInVue } from 'veaury';

const Chord = applyReactInVue(ReactChord);
</script>
<template>
  <ais-infinite-hits :show-previous="false">
    <template v-slot:item="{ item }">
      <h2>{{ item.key + item.suffix }}</h2>
      <div class="chord-image">
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
      </div>
      <div class="posCount">
        {{
          item.positions.length > 1
            ? `${item.positions.length} positions`
            : '1 position'
        }}
      </div>
    </template>
  </ais-infinite-hits>
</template>
<style>
.ais-InfiniteHits {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: var(--pad-top);
}
.ais-InfiniteHits-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(30%, 140px), 1fr));
  list-style: none;
  gap: 2rem 0.5rem;
}

.ais-InfiniteHits-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeUp 0.75s ease-out forwards;
  h2 {
    margin-bottom: -1rem;
    font-size: calc(var(--step-0) + 0.2vmax);
  }
  .chord-image {
    width: 100%;
    max-width: 250px;
    aspect-ratio: 250/218.1;
  }
  svg {
    max-width: 250px;
    animation: fadeIn 0.5s ease-out forwards;
  }
  .posCount {
    font-size: var(--step--1);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.ais-InfiniteHits-loadMore {
  align-self: center;
}
.ais-InfiniteHits-loadMore:disabled {
  display: none;
}
</style>
