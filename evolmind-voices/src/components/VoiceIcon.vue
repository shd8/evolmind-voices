<template>
  <div
  :class="{'random-icon': isRandom}"
  @click="updateFavorites(voice)"
  >
    <img
    :src="require(`../assets/${voice.icon}`)"
    :class="{'favorite-image': isInFavorites(voice.id)}"
    :alt="voice.icon"
    >
    <span>{{voice.name}}</span>
  </div>
  <AddToFavorites
  @click="updateFavorites(voice)"
  v-if="voice.id !== randomVoice.id"
  :isInFavorites="isInFavorites(voice.id)"
  class="add-to-favorites"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapState } from 'vuex';
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

    ...mapState([
      'randomVoice',
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
  align-items: center;
  padding: 1em 3em;
  color: $details;
  width: 7em;

  span {
    width: 9em;
    padding: 0.5em 0em 1em 0em;
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
  border-radius: 50%;
  border: 2px solid transparent;

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

.favorite-image {
  border: 2px solid $details;
}

.add-to-favorites {
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid $details;
  position: absolute;
  margin: -10em 0em 0em 2em;
  background-color: $base;
}

@media (max-width: 500px) {
  div {
    padding: 0em 2em;
  }
}

</style>
