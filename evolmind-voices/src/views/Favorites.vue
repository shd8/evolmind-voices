<template>
  <div class="about">
    <h1>This is a favorites page</h1>
    <button @click="fetchVoices">Load voices</button>
    <ul
    v-for='voice in favorites'
    :key="voice.id">
      <li>
        <VoiceIcon
        :id="voice.id"
        :name="voice.name"
        :icon="voice.icon"
        :tags="voice.tags"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import VoiceIcon from '@/components/VoiceIcon.vue';

export default defineComponent({
  name: 'Favorites',

  components: {
    VoiceIcon,
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
