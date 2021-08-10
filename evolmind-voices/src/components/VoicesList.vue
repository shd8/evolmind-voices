<template>
  <section>
    <span>{{list.length}}</span>
    <p>results</p>
    <ClearFilters />
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
import ClearFilters from '@/components/ClearFilters.vue';

export default defineComponent({
  name: 'VoicesList',
  props: ['list'],
  components: {
    VoiceIcon,
    ClearFilters,
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
  padding-bottom: 4em;

  span {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    align-items: center;
    justify-content: center;
    display: flex;
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
