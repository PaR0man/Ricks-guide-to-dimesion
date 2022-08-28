<script lang="ts">
import { defineComponent } from "vue";

import type { IEpisode } from "@/graphql/queries/types/episodeType";
import { EPISODE } from "../../graphql/queries/episode";
import CharacterCard from "../list/CharacterCard.vue";

interface EpisodePageData {
  episodeData?: IEpisode;
}

export default defineComponent({
  components: { CharacterCard },

  data(): EpisodePageData {
    return {
      episodeData: undefined,
    };
  },
  apollo: {
    episode: {
      query: EPISODE,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      result({ data }) {
        this.episodeData = data.episode;
      },
    },
  },
});
</script>

<template>
  <div>
    <h1>{{ episodeData?.name }}</h1>
    <h2>{{ episodeData?.air_data }}</h2>
    <h2>Characters</h2>
    <div class="EpisodePage__charactersList">
      <CharacterCard
        key="id"
        v-for="character in episodeData?.characters"
        :character="character"
      />
    </div>
  </div>
</template>

<style>
.EpisodePage__charactersList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>
