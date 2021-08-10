<template>
    <em v-if="isInFavorites" class="fas fa-heart" />
    <em v-else  class="far fa-heart" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddToFavorites',

  props: ['isInFavorites'],
});

</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

em {
  padding: 0.5em;
  color: $details;
}

</style>
