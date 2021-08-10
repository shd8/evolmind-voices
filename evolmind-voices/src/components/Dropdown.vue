<template>
    <section class="dropDownMenuWrapper">

        <div
        v-if="iconClass"
        class="iconWrapper"
        @click="dropdownSetter"
        >
          <em :class="iconClass"/>
        </div>

        <div
        v-else
        class="iconWrapper"
        @click="dropdownSetter"
        >
          <div class="bar1" :class="{ 'bar1--open' : isOpen }" />
          <div class="bar2" :class="{ 'bar2--open' : isOpen }" />
          <div class="bar3" :class="{ 'bar3--open' : isOpen }" />
        </div>

        <section
        class="dropdownMenu"
        :class="{'search-dropdown': iconClass === 'fas fa-search'}"
        v-if="isOpen">
            <div class="menuArrow" />
            <slot/>
        </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dropdown',
  props: ['isOpen', 'dropdownSetter', 'iconClass'],

});

</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.dropDownMenuWrapper {

  display: flex;
  justify-content: center;
  width: 2em;
  height: 2em;

  .dropDownMenuButton {
    border: none;
    font-size: inherit;
    background: none;
    outline: none;
    position: absolute;
  }

  .iconWrapper {
    width: 2em;
    height: 2em;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .bar1 {
      margin-top: 0.1em;
      width: 60%;
      max-width: 28px;
      height: 3px;
      background: $grey;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 9999px;
      transform: translate(-50%, calc(-50% - 8px) );
      transition: all 0.2s ease;
    }

    .bar1--open {
      transform: translate(-50%, -50%) rotate(45deg);
      margin-top: 0;
      background: $grey;
    }

    .bar2 {
      width: 60%;
      max-width: 28px;
      height: 3px;
      background: $grey;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 9999px;
      opacity: 1;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease;
    }

    .bar2--open {
      opacity: 0;
    }

    .bar3 {
      width: 60%;
      max-width: 28px;
      height: 3px;
      background: $grey;
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, calc(-50% + 8px) );
      transition: all 0.2s ease;
    }

    .bar3--open {
      top: 50%;
      transform: translate(-50%, -50% ) rotate(-45deg);
      background: $grey;
    }

  }

  .iconWrapper--noTitle {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    transform: none;
  }

  .dropdownMenu {
    position: absolute;
    min-height: 10px;
    left: 3em;
    top: -0.5em;
    border-radius: 8px;
    border: 1px solid $details;
    box-shadow: 10px 10px 0 0 rgba(black,.03);
    background: $details;
    padding: 1em 1em;

    .menuArrow {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0.75em;
      left: -9px;
      background: $details;
      transform: rotate(45deg);
      border-radius: 4px 0 0 0;
    }

    .option {
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      cursor: pointer;
      position: relative;
      z-index: 2;

      &:last-child {
        border-bottom: 0;
      }

      * {
        color: inherit;
        text-decoration: none;
        background: none;
        border: 0;
        padding: 0;
        outline: none;
        cursor: pointer;
      }

    }

    .desc {
      opacity: 0.5;
      display: block;
      width: 100%;
      font-size: 14px;
      margin: 3px 0 0 0;
      cursor: default;
    }

  }

  .search-dropdown {
  background: transparent;
  border: none;

  .menuArrow {
    background: transparent;
  }
}

  @keyframes menu {
    from { transform: translate3d( 0, 30px ,0 ) }
    to { transform: translate3d( 0, 20px ,0 ) }
  }

}

.dropDownMenuWrapper--noTitle {
  padding: 0;
  width: 60px;
  height: 60px;
}

</style>
