<script setup lang="ts">
import CharactersList from "./components/list/CharactersList.vue";
import CharacterPage from "./components/characterPage/CharacterPage.vue";
</script>

<template>
  <h1 @click="$router.push('/')">Rick's guide to dimension</h1>
  <router-view />
</template>

<style></style>
