<template>
    <div class="header">
        <nav
        class="nav">
            <div class="nav__buttons">
                <section class="links">
                    <router-link to="/favorites" @click="scrollToTop">
                        <em class="far fa-heart" />
                    </router-link>
                    <router-link to="/" @click="scrollToTop">
                        <em class="fas fa-home" />
                    </router-link>
                </section>
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
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';
import { Voice } from '@/types/interfaces';

interface Data {
    searchInput: string,
    filteredProducts: Array<Voice>
}
export default defineComponent({
  name: 'Header',
  computed: {
    ...mapGetters([
    ]),
    ...mapState([
      'voices',
      'favorites',
    ]),
  },
  methods: {
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
// @import '../styles/_colors.scss';

.header {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 99;
}

</style>
