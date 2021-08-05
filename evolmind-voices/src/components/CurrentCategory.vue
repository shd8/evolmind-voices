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

<style>

</style>
