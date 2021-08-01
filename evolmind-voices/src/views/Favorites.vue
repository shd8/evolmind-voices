<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="fetchVoices">Load voices</button>
    <p>{{voices}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'Favorites',

  computed: {
    ...mapState([
      'voices',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchVoices',
    ]),
  },
});
</script>
