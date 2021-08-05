<template>
  <div class="favorites">
    <VoicesList v-if="favorites.length" :list="filteredFavorites" />
    <section v-else>
      <p>You have no favorites songs yet</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
import VoicesList from '@/components/VoicesList.vue';

export default defineComponent({
  name: 'Favorites',

  components: {
    VoicesList,
  },

  computed: {
    ...mapState([
      'favorites',
    ]),

    ...mapGetters([
      'filteredFavorites',
    ]),
  },
});
</script>

<style lang="scss" scoped>

p {
  padding-top: 2em;
}

</style>
