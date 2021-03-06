<template>
    <div :class="['modal', displayModalClass]" @click="toggleModal">
      <transition name="slide-fade">
        <div
        :class="['modal__window', displayWindowClass]"
        @click.stop
        v-show="isModalOpen"
        >
          <slot name="header">
              <div class="modal__header p-6 pt-4 pb-4">
                  <button
                      class="modal__header-button"
                      icon="menu-close"
                      icon-size="xs"
                      color="grey-2"
                      hide-label
                      @click="toggleModal"
                  >
                    <em class="far fa-times-circle"></em>
                  </button>
              </div>
          </slot>
          <slot />
        </div>
      </transition>
    </div>
</template>

<script lang='ts'>
/* eslint-disable no-unused-expressions */
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'Modal',

  components: { },

  props: ['isModalOpen'],

  computed: {
    displayModalClass(): 'modal--displayed' | '' {
      return this.isModalOpen ? 'modal--displayed' : '';
    },
    displayWindowClass(): 'modal__window--displayed' | '' {
      return this.isModalOpen ? 'modal__window--displayed' : '';
    },
  },

  watch: {
    isModalOpen(value:boolean):void {
      value
        ? this.body.classList.add('body--overflow-hidden')
        : this.body.classList.remove('body--overflow-hidden');
    },
  },

  mounted() {
    this.isModalOpen ? this.body.classList.add('body--overflow-hidden') : '';
  },

  unmounted(): void {
    this.body.classList.remove('body--overflow-hidden');
  },

  methods: {
    ...mapMutations([
      'clearRandomVoice',
    ]),

    toggleModal() {
      this.clearRandomVoice();
      this.$emit('toggle-modal');
    },
  },

  data() {
    return {
      body: document.body,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/_colors.scss";

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  visibility: hidden;
  opacity: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  @keyframes slide-fade-in {
    0% {
      transform: translateY(-10%)
    }
    100% {
      transform: translateY(0%);
    }
  }
    &--displayed {
    visibility: visible;
    opacity: 1;
  }
    &__window {
      position: relative;
      transition: height ease-in 0.3s;
      transition: opacity ease-in 0.2s;
      background: get-color('white');
      width: 100%;
      height: 100vh;
    &--displayed {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px get-color('grey-5');
  }
}
.modal__header-button {
  border: none;
  border-radius: 3em;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  cursor: pointer;
}
.fa-times-circle {
  color: $details;
  font-size: 3em;
}
.slide-fade-enter-active {
  animation: slide-fade-in 0.5s;
}
.slide-fade-leave-active {
  animation: slide-fade-in 0.5s reverse;
}
@media (min-width: 720px) {
    .fa-times-circle {
    color: $details;
    font-size: 5em;
  }
  .modal__header-button {
    right: 1em;
    top: 1em;
  }
  .modal__window {
    width: 80%;
    height: 80%;
  }
  .modal__window--displayed {
    width: 80%;
    height: 80%;
    border: 1px solid crimson;
    border-radius: 1em 1em 0em 1em;
  }
}
</style>
