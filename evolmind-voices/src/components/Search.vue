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
@import '../styles/_colors.scss';

  input {
    font-family: 'Inconsolata', monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: -1em;
    height: 3.5em;
    outline: none;
    border: none;
    background: $details;
    color: white;
    text-shadow: 0 0 10px $details;
    padding: 0em 1em 0em 2em;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 $details,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    font-weight: bolder;
    letter-spacing: 0.1em;

    width: 22em;
    cursor: text;

    &::placeholder {
      color: white;
      font-weight: bolder;
      opacity: 0.5;
      font-weight: bolder;
    }

    &:focus {
      box-shadow: 0 0 5px $details,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    }
  }

</style>
