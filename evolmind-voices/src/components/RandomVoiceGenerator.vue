<template>
  <p>Random Voice Generator</p>
  <div v-if="randomVoice.id && showRandomVoice">
    <VoiceIcon :voice="randomVoice" :isRandom="true"/>
    <em class="fas fa-redo-alt" @click="hideRandomVoice" />
  </div>
  <em v-else class="fas fa-dice"  @click="handleGenerateRandomVoice"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';
import VoiceIcon from '@/components/VoiceIcon.vue';

export default defineComponent({
  name: 'RandomVoiceGenerator',

  components: {
    VoiceIcon,
  },

  computed: {
    ...mapState([
      'randomVoice',
    ]),
  },

  methods: {
    ...mapMutations([
      'generateRandomVoice',
    ]),

    handleGenerateRandomVoice() {
      this.generateRandomVoice();
      this.hideRandomVoice();
    },

    hideRandomVoice() {
      this.showRandomVoice = !this.showRandomVoice;
    },
  },

  data() {
    return {
      showRandomVoice: false,
    };
  },

});

</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

p {
  font-size: 3em;
  padding: 1em 0em;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

em {
  color: $details;
  transition: 500ms ease-out;
  cursor: pointer;

  &:hover {
    transition: 500ms ease-out;
    text-shadow: 0 0 5px white,
                0 0 20px rgba(255, 38, 0, 0.8),
                0 0 35px rgba(255, 38, 0, 0.7),
                0 0 50px rgba(255, 38, 0, 0.6);
    border-color: #fff;
  }
}

.fa-dice {
  font-size: 15em;
  padding: 10vmin;
}

.fa-redo-alt {
  font-size: 4em;
}

</style>
