<template>
  <div class="header">
    <nav class="nav">
      <div class="nav__buttons">
        <router-link to="/" @click="scrollToTop">
          <em class="fas fa-home" />
        </router-link>
        <div class='search'>
          <em class="fas fa-search"></em>

          <Search />

        </div>
        <em
        class="fas fa-sort-alpha-up"
        @click="sortByAlphabet"
        />
        <em
        class="fas fa-sort-alpha-down-alt"
        @click="sortByAlphabetReverse"
        />

        <Dropdown :menu-title="dropdownSelection">

          <section
          v-for="category in CATEGORIES"
          :key="category.category"
          class="option"
          @click="handleDropdown(category)"
          >
            <button>{{category.category}}</button>
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
import { Voice, Category } from '@/types/interfaces';
import Dropdown from '@/components/Dropdown.vue';
import Search from '@/components/Search.vue';
import CATEGORIES from '@/assets/categories';

interface Data {
  CATEGORIES: Array<Category>,
  dropdownSelection: string,
  searchInput: string,
  filteredProducts: Array<Voice>
}

export default defineComponent({
  name: 'Header',

  components: {
    Dropdown,
    Search,
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

    handleDropdown(category: Category) {
      this.filterByCategory(category.tag);
      this.dropdownSelection = category.category;
    },

  },
  data(): Data {
    return {
      CATEGORIES,
      dropdownSelection: 'All songs',
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
