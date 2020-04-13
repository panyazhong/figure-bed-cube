<template>
  <div class="">
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      :showSlider=true
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view/>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      selectedLabelDefault: 'Home',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Group',
        icon: 'cubeic-red-packet'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      this.$router.push({
        name: label
      });
    },
    changeHandler () {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style scoped lang="scss">
  /*fade-transform*/
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  //
  .cube-tab-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    ::v-deep .cube-tab {
      div {
        font-size: .1rem;
      }
    }
  }
</style>
