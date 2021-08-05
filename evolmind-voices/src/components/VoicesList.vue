<template>
  <section>
    <span>{{list.length}}</span>
    <p>results</p>
  </section>
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

section {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    border-radius: 50%;
    padding: 0.5em;
    border: 1px solid $details;
    color: $details;

    &:hover {
      cursor: default;
      box-shadow: 0 0 5px $details,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    }
  }

  p {
    color: $details;
    letter-spacing: 0.1em;
    padding-left: 1em;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
