<template>
  <Header />
  <CurrentCategory />
  <InputString/>
  <RandomVoice />
  <div class="container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import Header from '@/components/Header.vue';
import CurrentCategory from '@/components/CurrentCategory.vue';
import InputString from '@/components/InputString.vue';
import RandomVoice from '@/components/RandomVoice.vue';

export default defineComponent({
  name: 'App',

  components: {
    Header,
    CurrentCategory,
    InputString,
    RandomVoice,
  },

  computed: {
    ...mapState([
      'voices',
      'inputString',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchVoices',
    ]),
  },

  created() {
    this.fetchVoices();
  },
});
</script>

<style lang="scss">
@import './styles/_colors.scss';
@import './assets/_global-styles.scss';

html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  border: none;
  background: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding-top: 1em;
}

html {
  background-color: $base;
  p {
    color: $details;
  }

  button {
    outline: none;
  }
}

em:before {
  color: inherit;
}
</style>
