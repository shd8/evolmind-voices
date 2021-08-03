<template>
  <div class="home">
    <VoicesList v-if="filteredVoices.length" :list="filteredVoices" />
    <VoicesList v-else :list="voices" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VoicesList from '@/components/VoicesList.vue';
import { mapGetters, mapState } from 'vuex';

export default defineComponent({
  name: 'Home',

  computed: {
    ...mapState([
      'voices',
    ]),

    ...mapGetters([
      'filteredByStringVoices',
      'filteredVoices',
    ]),
  },

  components: {
    VoicesList,
  },
});
</script>

<style lang="scss" scoped>

</style>
