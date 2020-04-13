<template>
  <div class="">
    
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      list: [
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
      ],
      loading: false,
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last);
        }
        this.loading = false;
      }, 2500);
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 0 auto;
    }
  }
  
  img[lazy=loading] {
    width: 100px;
    height: 300px;
    background: rgba(0, 0, 0, .2);
    margin: auto;
  }
</style>
