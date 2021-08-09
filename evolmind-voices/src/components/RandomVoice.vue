<template>
  <div class="random-voice">
    <em class="fas fa-dice" @click='handleToggleModal' />
    <Modal
    :isModalOpen="showModal"
    @toggleModal='toggleModal'
    >
      <RandomVoiceGenerator />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';
import RandomVoiceGenerator from '@/components/RandomVoiceGenerator.vue';

export default defineComponent({
  name: 'RandomVoice',

  components: {
    Modal,
    RandomVoiceGenerator,
  },

  methods: {

    toggleModal() {
      this.showModal = !this.showModal;
    },

    handleToggleModal() {
      this.toggleModal();
    },

  },

  data() {
    return {
      showModal: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.random-voice {
  position: absolute;
  right: 3em;
  top: 2em;

  em {
    cursor: pointer;
    color: $details;
    font-size: 3em;
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
}

</style>
