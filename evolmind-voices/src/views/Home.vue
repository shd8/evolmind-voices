<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VoicesList :list="voices"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VoicesList from '@/components/VoicesList.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Home',

  computed: {
    ...mapState([
      'voices',
    ]),
  },

  components: {
    VoicesList,
  },
});
</script>

<style lang="scss" scoped>

</style>
