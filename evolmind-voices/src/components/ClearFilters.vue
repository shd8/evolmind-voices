<template>
  <em
  v-if="currentCategory !== '' || inputString !== ''"
  @click="clearFilters"
  class="far fa-window-close" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ClearFilters',

  computed: {
    ...mapState([
      'currentCategory',
      'inputString',
    ]),
  },

  methods: {

    ...mapMutations([
      'clearFilters',
    ]),
  },
});

</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

em {
  cursor: pointer;
  color: $details;
  font-size: 2em;
  margin-left: 1em;

  &:hover {
    color: white;
    }
}

</style>
