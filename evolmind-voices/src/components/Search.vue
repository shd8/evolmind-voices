<template>
  <input
    class="search__input"
    type="text"
    placeholder="Search something ..."
    v-model="searchInput"
    v-on:input="filterBySearch(searchInput)"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { Voice } from '@/types/interfaces';

interface Data {
  searchInput: string,
  filteredProducts: Array<Voice>
}

export default defineComponent({
  name: 'Search',

  computed: {
    ...mapState([
      'rightMode',
    ]),

  },

  methods: {
    ...mapMutations([
      'filterBySearch',
    ]),
  },

  data(): Data {
    return {
      searchInput: '',
      filteredProducts: [],
    };
  },

});

</script>

<style scoped lang="scss">

</style>
