<script lang="ts">
import { CHARACTER } from "@/graphql/queries/character";
import type { ICharacter } from "../graphql/queries/types/characterTypes";
import { defineComponent } from "vue";

interface CharacterPageData {
  char?: ICharacter;
}

export default defineComponent({
  data(): CharacterPageData {
    return {
      char: undefined,
    };
  },

  apollo: {
    character: {
      query: CHARACTER,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      result({ data }) {
        this.char = data.character;
      },
    },
  },
});
</script>

<template>
  <div v-if="char">
    <h1>{{ char.name }}</h1>
    <img :src="char.image" :alt="char.name" />
    <h2>Status: {{ char.status }}</h2>
    <h2>Species: {{ char.species }}</h2>
    <h2>Gender: {{ char.gender }}</h2>
    <h2>Type: {{ char.type }}</h2>
  </div>
</template>
