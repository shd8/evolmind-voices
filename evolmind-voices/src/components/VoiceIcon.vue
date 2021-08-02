<template>
  <div>
    <img
    :src="require(`../assets/${icon}`)"
    :alt="icon"
    @click="oneAlert"
    >
    <span>{{name}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VoiceIcon',
  props: ['id', 'name', 'icon', 'tags'],

  methods: {
    oneAlert() {
      alert('hola');
    },
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
    transition: ease-in 200ms;
    background-color: $details;
  }
}

</style>
