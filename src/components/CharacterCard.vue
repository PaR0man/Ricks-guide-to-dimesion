<template>
  <div class="characterCard__root">
    <img :src="character.image" :alt="character.name" />
    <h2>{{ character.name }}</h2>
    <p>{{ character.status }}</p>
    <p>{{ character.species }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    character: Object,
  },
};
</script>

<style scoped>
.characterCard__root {
  margin: 5px;
  border: 2px solid black;
}
</style>
