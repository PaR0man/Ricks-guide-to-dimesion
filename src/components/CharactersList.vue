<template>
  <div>
    <div v-for="character in characters" :key="character.id">
      {{ character.name }}
    </div>
  </div>
</template>

<script>
import { CHARACTERS } from "../graphql/queries/characters";

export default {
  apollo: {
    characters: {
      query: CHARACTERS,
      update: (data) => data.characters.results,
    },
  },
};
</script>

<style></style>
