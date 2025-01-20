<script setup>
import ReactChord from '@tombatossals/react-chords/lib/Chord';
import { applyReactInVue } from 'veaury';

const Chord = applyReactInVue(ReactChord);
const props = defineProps(['item']);
</script>

<template>
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
