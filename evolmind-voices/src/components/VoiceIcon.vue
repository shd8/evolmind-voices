<template>
  <div>
    <img
    :src="require(`../assets/${voice.icon}`)"
    :alt="icon"
    @click="updateFavorites(voice)"
    >
    <span>{{voice.name}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'VoiceIcon',
  props: ['voice'],

  methods: {
    ...mapMutations([
      'updateFavorites',
    ]),
  },
});
</script>

<style scoped lang="scss">
@import '../styles/_colors.scss';

div {
  display: flex;
  flex-direction: column;
  padding: 0em 3em;
  color: $details;
  width: 7em;

  span {
    word-wrap: break-word;
  }
}

img {
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    transition: ease-in-out 100ms;
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 0 5px red,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    border-color: #fff;
  }
}

@media (max-width: 500px) {
  div {
    padding: 0em 2em;
  }
}

</style>
