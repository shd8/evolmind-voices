<template>
  <div class="header">
    <nav class="nav">
      <div class="nav__buttons">
        <router-link to="/" @click="scrollToTop">
          <em class="fas fa-home" />
        </router-link>
        <div class='search'>
          <em class="fas fa-search"></em>
          <input
          class="search__input"
          type="text"
          placeholder="Search something ..."
          v-model="searchInput"
          v-on:input="filterWithSearchInput"
          />
          <em class="far fa-play-circle" />
        </div>
        <em
        class="fas fa-sort-alpha-up"
        @click="sortByAlphabet"
        />
        <em
        class="fas fa-sort-alpha-down-alt"
        @click="sortByAlphabetReverse"
        />

        <Dropdown menu-title="All songs">

          <section class="option">
            <button @click="filterByCategory('misc')">Miscelaneous</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('devices')">Devices</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('human')">Human</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('robotic')">Robotic</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('sing')">Sing</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('environment')">Environment</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('character')">Character</button>
          </section>

          <section class="option">
            <button @click="filterByCategory('horror')">Horror</button>
          </section>

        </Dropdown>

          <router-link to="/favorites" @click="scrollToTop">
            <em class="far fa-heart" />
        </router-link>
      </div>
    </nav>
      <hr class="hrItem">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapState } from 'vuex';
import { Voice } from '@/types/interfaces';
import Dropdown from '@/components/Dropdown.vue';

interface Data {
  searchInput: string,
  filteredProducts: Array<Voice>
}

export default defineComponent({
  name: 'Header',

  components: {
    Dropdown,
  },

  computed: {
    ...mapGetters([
    ]),
    ...mapState([
      'voices',
      'favorites',
    ]),
  },
  methods: {
    ...mapMutations([
      'sortByAlphabet',
      'sortByAlphabetReverse',
      'filterByCategory',
    ]),

    scrollToTop() {
      window.scrollTo(0, 0);
    },
    emptyInput() {
      this.searchInput = '';
      this.filteredProducts = [];
    },
    filterWithSearchInput() {
      if (this.searchInput !== '') {
        this.filteredProducts = this.voices
          .filter((product:Voice) => product.name.toLowerCase()
            .includes(this.searchInput.toLowerCase()));
      } else {
        this.filteredProducts = [];
      }
    },
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
// @import "../styles/_mixins.scss";
@import '../styles/_colors.scss';
@import '../assets/_global-styles.scss';

.search {
  display: flex;
  align-items: center;
}

.fa-home,
.fa-heart,
.fa-play-circle,
.fa-sort-alpha-up,
.fa-sort-alpha-down-alt {
  cursor: pointer;
  font-size: 2em;
  padding: 0.25em;
}

.nav {
  padding: 1em 1em 0.5em 1em;

  &__buttons {
    display: flex;
    width: 100%;
    place-content: space-between;
  }
}

.header {
  background-color: $base;
  position: fixed;
  width: 100%;
  z-index: 99;
}

em {
  color: $gray;
}

.fa-home,
.fa-heart,
.fa-play-circle,
.fa-sort-alpha-up,
.fa-sort-alpha-down-alt {
  &:hover {
    color: $details;
  }
}

</style>
