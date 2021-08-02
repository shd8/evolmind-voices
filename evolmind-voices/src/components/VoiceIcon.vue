<template>
    <img :src="require(`../assets/${icon}`)" alt="">
    <span>{{name}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VoiceIcon',
  props: ['id', 'name', 'icon', 'tags'],

});
</script>

<style scoped lang="scss">

</style>
