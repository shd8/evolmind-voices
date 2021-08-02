<template>
  <div class="favorites">
    <h1>This is a favorites page</h1>
    <VoicesList :list="favorites" />
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
