<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul
    v-for='voice in voices'
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
import VoiceIcon from '@/components/VoiceIcon.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Home',

  computed: {
    ...mapState([
      'voices',
    ]),
  },

  components: {
    VoiceIcon,
  },
});
</script>

<style lang="scss" scoped>

</style>
