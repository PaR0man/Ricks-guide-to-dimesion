<script lang="ts">
import { LOCATION } from "@/graphql/queries/location";
import type { ILocation } from "@/graphql/queries/types/locationTypes";
import { defineComponent } from "vue";
import CharacterCard from "../list/CharacterCard.vue";

interface LocationPageData {
  locationData?: ILocation;
}

export default defineComponent({
  data(): LocationPageData {
    return {
      locationData: undefined,
    };
  },
  apollo: {
    location: {
      query: LOCATION,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      result({ data }) {
        this.locationData = data.location;
      },
    },
  },
  components: { CharacterCard },
});
</script>

<template>
  <div>
    <h1>{{ locationData?.name }}</h1>
    <h2>Type: {{ locationData?.type }}</h2>
    <h2>Dimension: {{ locationData?.dimension }}</h2>
    <h2>Residents:</h2>
    <div class="LocationPage__residents">
      <CharacterCard
        v-for="character in locationData?.residents"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<style>
.LocationPage__residents {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>
