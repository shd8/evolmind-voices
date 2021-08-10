<template>
  <div class="header">
    <button
    type="button"
    @click="handleShowNavigation"
    class="header__navigation"
    :class="{'header__navigation--activated': !showNavigation}"
    ></button>

    <div class="blue" :class="{'hidden hidden--blue': showNavigation}">
      <Dropdown
      iconClass="fas fa-search"
      :dropdownSetter="() => setOpenedDropdown('search')"
      :isOpen="openedDropdown === 'search'"
      >
        <Search />
      </Dropdown>
    </div>

    <div class="red" :class="{'hidden--red': showNavigation}">
      <Dropdown
      class="dropdown"
      iconClass="fas fa-sort-amount-up-alt"
      :dropdownSetter="() => setOpenedDropdown('sort')"
      :isOpen="openedDropdown === 'sort'"
      >
        <em class="fas fa-sort-alpha-up" @click="sortByAlphabet" />
        <em class="fas fa-sort-alpha-down-alt" @click="sortByAlphabetReverse" />
      </Dropdown>
    </div>

    <div class="orange" :class="{'hidden--orange': showNavigation}">
      <Dropdown
      :dropdownSetter="() => setOpenedDropdown('category')"
      :isOpen="openedDropdown === 'category'"
      >
        <button
        v-for="category in CATEGORIES"
        :key="category.category"
        class="option"
        type="button"
        @click="handleDropdown(category)"
        >
          <span>{{category.category}}</span>
        </button>
      </Dropdown>
    </div>

    <div
    class="black"
    :class="{'hidden--black': showNavigation}"
    @click="setOpenedDropdown('')"
    >
        <router-link to="/" @click="scrollToTop">
        <em class="fas fa-home" />
      </router-link>
    </div>

    <div
    class="white"
    :class="{'hidden--white': showNavigation}"
    @click="setOpenedDropdown('')"
    >
      <router-link to="/favorites" @click="scrollToTop">
            <em class="far fa-heart" />
        </router-link>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { Category } from '@/types/interfaces';
import Dropdown from '@/components/Dropdown.vue';
import Search from '@/components/Search.vue';
import CATEGORIES from '@/assets/categories';

interface Data {
  CATEGORIES: Array<Category>,
  dropdownSelection: string,
  searchInput: string,
  showNavigation: boolean,
  openedDropdown: string,
}

export default defineComponent({
  name: 'Header',

  components: {
    Dropdown,
    Search,
  },

  computed: {
    ...mapState([
      'voices',
      'favorites',
    ]),
  },

  methods: {
    ...mapMutations([
      'sortByAlphabet',
      'sortByAlphabetReverse',
      'updateCategoryTag',
    ]),

    setOpenedDropdown(dropdown: string) {
      // eslint-disable-next-line no-unused-expressions
      this.openedDropdown === dropdown
        ? this.openedDropdown = ''
        : this.openedDropdown = dropdown;
    },

    handleShowNavigation() {
      this.openedDropdown = '';
      this.showNavigation = !this.showNavigation;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    handleDropdown(category: Category) {
      this.updateCategoryTag(category.tag);
      this.dropdownSelection = category.category;
    },
  },

  data(): Data {
    return {
      CATEGORIES,
      dropdownSelection: 'All songs',
      searchInput: '',
      showNavigation: true,
      openedDropdown: '',
    };
  },
});
</script>

<style scoped lang="scss">
@import '../styles/_colors.scss';
@import '../assets/_global-styles.scss';

.search {
  display: flex;
  align-items: center;
}

.fa-home,
.fa-heart,
.fa-play-circle {
  cursor: pointer;
  font-size: 1em;
  padding: 0.25em;
}

.fa-sort-alpha-up,
.fa-sort-alpha-down-alt {
  font-size: 1.5em;
  padding: 0.25em 0em;
}

.nav {
  padding: 1em 1em 0.5em 20em;

  &__buttons {
    display: flex;
    width: 100%;
    place-content: space-between;
  }
}

.header__navigation {
  cursor: pointer;
  position: absolute;
  left: 0;
  border-style: hidden;
  height: 10em;
  width: 10em;
  border-radius: 0em 0em 9em 0em;
  background-color: $details;
  transition: 300ms ;

  &--activated {
    height: 12em;
    width: 12em;
    transition: 300ms ;
  }

  &:hover {
    background-color: red;
    box-shadow: 0 0 5px red,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    border-color: #fff;
  }
}

.header {
  background-color: $base;
  position: fixed;
  width: 100%;
  z-index: 1;
}

em {
  color: $grey;
}

.fa-sort-alpha-up,
.fa-sort-alpha-down-alt {
  &:hover {
    color: $focus;
  }
}

.hidden {
  visibility: hidden;

  &--blue {
    transform: translate(-11em, 0em);
  }

  &--red {
    transform: translate(-11em, -3em);
  }

  &--orange {
    transform: translate(-11em, -6em);
  }

  &--black {
    transform: translate(-11em, -11em);
  }

  &--white {
    transform: translate(-11em, -13em);
  }

}

.blue,
.red,
.orange,
.black,
.white {
  &:hover {
    transition: ease-in-out 100ms;
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 0 5px red,
                0 0 20px rgba(255, 38, 0, 1),
                0 0 35px rgba(255, 38, 0, 1),
                0 0 50px rgba(255, 38, 0, 1);
    border-color: #fff;
  }

}

.blue {
  @include fixedRound(1em, 11.5em, 150ms);
}

.red {
  @include fixedRound(4em, 11.5em, 250ms);
}

.orange {
  @include fixedRound(7.5em, 10em, 350ms);
}

.black {
  @include fixedRound(10em, 6.5em, 450ms);
}

.white {
  @include fixedRound(11em, 2em, 550ms);
}

.option {

  padding: 0.5em;

  span {
    cursor: pointer;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding-bottom: 0.3em;
    background-image: linear-gradient(
      transparent calc(100% - 5px),
      $focus
    );
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    transition: 0.5s ease;
  }

  &:hover {
    span {
      background-size: 100%;
    }
  }

}

</style>
