<script lang="ts">
import { CHARACTER } from "@/graphql/queries/character";
import type { ICharacter } from "../../graphql/queries/types/characterTypes";
import { defineComponent } from "vue";

interface CharacterPageData {
  characterData?: ICharacter;
}

export default defineComponent({
  data(): CharacterPageData {
    return {
      characterData: undefined,
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
        this.characterData = data.character;
      },
    },
  },
});
</script>

<template>
  <div v-if="characterData">
    <h1>{{ characterData.name }}</h1>
    <img
      :src="
        characterData.image ||
        'https://rickandmortyapi.com/api/character/avatar/66.jpeg'
      "
      :alt="characterData.name"
    />
    <h2>Status: {{ characterData.status }}</h2>
    <h2>Species: {{ characterData.species }}</h2>
    <h2>Gender: {{ characterData.gender }}</h2>
    <h2 v-if="characterData.type">Type: {{ characterData.type }}</h2>
    <h2
      @click="
        characterData?.location.id &&
          $router.push(`/location/${characterData?.location.id}`)
      "
    >
      Location: {{ characterData.location.name }}
    </h2>
    <h2
      @click="
        characterData?.origin.id &&
          $router.push(`/location/${characterData?.origin.id}`)
      "
    >
      Origin: {{ characterData.origin.name }}
    </h2>
  </div>
</template>
