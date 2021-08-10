<template>
  <p>{{currentCategoryName}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'CurrentCategory',

  computed: {

    ...mapGetters([
      'currentCategoryName',
    ]),
  },

});

</script>

<style lang="scss" scoped>
@import '../assets/_global-styles.scss';

  p {
    font-size: 3em;
    padding: 1.5em 0.5em 0.5em 0.5em;
    letter-spacing: 0.1em;
  }

@media (max-width: $tablet) {
  p {
    padding-top: 5em;
  }
}

</style>
