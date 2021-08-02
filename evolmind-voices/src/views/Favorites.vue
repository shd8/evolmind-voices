<template>
  <div class="favorites">
    <VoicesList
    v-if="favorites.length"
    :list="favorites"
    />
    <section v-else>
      <p>You have no favorites songs yet</p>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
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
  },

  methods: {
    ...mapActions([
      'fetchVoices',
    ]),
  },
});
</script>

<style lang="scss">

p {
  padding-top: 2em;
}

</style>
