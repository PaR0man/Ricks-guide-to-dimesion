<script lang="ts">
import { defineComponent } from "vue";
import { CHARACTERS } from "../../graphql/queries/characters";
import type { ICharacter } from "../../graphql/queries/types/characterTypes";
import CharacterCard from "../list/CharacterCard.vue";

interface ChraracterListData {
  currentPage: number;
  charactersList: ICharacter[];
}

export default defineComponent({
  components: { CharacterCard },

  data(): ChraracterListData {
    return {
      currentPage: 1,
      charactersList: [],
    };
  },

  methods: {
    loadMore() {
      this.currentPage++;
    },
  },

  apollo: {
    characters: {
      query: CHARACTERS,
      variables() {
        return {
          page: this.currentPage,
        };
      },

      result({ data }) {
        this.charactersList.push(...data.characters.results);
      },
    },
  },
});
</script>

<template>
  <div class="characterList__root">
    <CharacterCard
      v-for="character in charactersList"
      :key="character.id"
      :character="character"
    />
  </div>
  <div
    v-intersection="loadMore"
    :class="{
      characterList__intersection__none: !Boolean(charactersList.length),
    }"
  />
</template>

<style scoped>
.characterList__intersection__none {
  display: none;
}

.characterList__root {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>
