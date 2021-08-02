<template>
  <ul
    v-for='voice in list'
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VoiceIcon from '@/components/VoiceIcon.vue';

export default defineComponent({
  name: 'VoicesList',
  props: ['list'],
  components: {
    VoiceIcon,
  },

});

</script>

<style>

</style>
