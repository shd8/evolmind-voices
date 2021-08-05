<template>
    <p v-if="inputString !== ''">Results matching "{{inputString}}":</p>
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

<style>

</style>
