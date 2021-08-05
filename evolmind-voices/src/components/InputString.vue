<template>
  <p v-if="inputString">Results matching "{{inputString}}":</p>
  <p v-else class="emptyInput">-</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'InputString',

  computed: {

    ...mapState([
      'inputString',
    ]),
  },

});

</script>

<style lang="scss" scoped>

  p {
    padding: 0.5em;
    font-size: 1.5em;
  }

  .emptyInput {
    color: transparent;
  }

</style>
