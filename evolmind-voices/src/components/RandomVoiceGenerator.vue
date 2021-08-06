<template>
  <p>Random Voice Generator</p>
  <em class="fas fa-dice" @click='handleToggleModal' />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'RandomVoiceGenerator',

});

</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

em {
    color: $details;
    font-size: 15em;
    transition: 500ms ease-out;

    &:hover {
    transition: 500ms ease-out;
    text-shadow: 0 0 5px white,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    border-color: #fff;
    }

}

</style>
