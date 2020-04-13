<template>
  <div class="">
    <infinite-list></infinite-list>
  </div>
</template>

<script type="text/ecmascript-6">
import infiniteList from "./components/InfiniteList"
export default {
  data() {
    return {

    }
  },
  components: {
    infiniteList
  },
  mounted() {
    console.log('hello')
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
