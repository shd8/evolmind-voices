<template>
  <input
    class="search__input"
    type="text"
    placeholder="Search something ..."
    v-model="searchInput"
    v-on:input="updateFilterString(searchInput)"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

interface Data {
  searchInput: string,
}

export default defineComponent({
  name: 'Search',

  methods: {
    ...mapMutations([
      'updateFilterString',
    ]),
  },

  data(): Data {
    return {
      searchInput: '',
    };
  },

});

</script>

<style scoped lang="scss">

</style>
