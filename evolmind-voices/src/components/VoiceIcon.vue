<template>
  <div :class="{'random-icon': isRandom}">
    <img
    :src="require(`../assets/${voice.icon}`)"
    :alt="voice.icon"
    @click="updateFavorites(voice)"
    >
    <span>{{voice.name}}</span>
  </div>
  <AddToFavorites :isInFavorites="isInFavorites(voice.id)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import AddToFavorites from '@/components/AddToFavorites.vue';

export default defineComponent({
  name: 'VoiceIcon',
  props: ['voice', 'isRandom'],

  components: {
    AddToFavorites,
  },

  computed: {
    ...mapGetters([
      'isInFavorites',
    ]),
  },

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

.random-icon {
  img {
    width: 15em;
  }

  span {
    font-size: 2em;
    padding-bottom: 1em;
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
