<template>
  <div class="characterList__root">
    <CharacterCard
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import { CHARACTERS } from "../graphql/queries/characters";
import CharacterCard from "./CharacterCard.vue";

export default {
  apollo: {
    characters: {
      query: CHARACTERS,
      variables: {
        page: 1,
      },
      update: (data) => data.characters.results,
    },
  },
  components: { CharacterCard },
};
</script>

<style scoped>
.characterList__root {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>
