<script lang="ts">
import type { ICharacter } from "@/graphql/queries/types/characterTypes";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    character: {
      type: Object as PropType<ICharacter>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="characterCard__root">
    <img
      :src="
        character.image ||
        'https://rickandmortyapi.com/api/character/avatar/66.jpeg'
      "
      :alt="character.name"
    />
    <h2 @click="$router.push(`/characters/${character.id}`)">
      {{ character.name }}
    </h2>
    <p>{{ character.status }}</p>
    <p>{{ character.species }}</p>
  </div>
</template>

<style scoped>
.characterCard__root {
  margin: 5px;
  border: 2px solid black;
}
</style>
