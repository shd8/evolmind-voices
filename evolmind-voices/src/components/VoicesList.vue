<template>
  <span>{{list.length}}</span>
  <ul>
    <li
      v-for='voice in list'
      :key="voice.id">
      <VoiceIcon
      :voice="voice"
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

<style scoped lang="scss">
// @import "../styles/_mixins.scss";
@import '../styles/_colors.scss';
@import '../assets/_global-styles.scss';

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
