<template>
  <div class="prcards">
<div class="prcard">
  <img alt="Zamlek shirts" class="product" :src="img" />
  <router-link to="/cart"><p>{{ desc }}.....{{ price }}</p></router-link>
</div>
</div>
</template>
<script>
export default {
  name: "Story",
  props: {
    number: Number,
    desc: String,
    img: String,
    price: String,
  },
};
</script>
<style lang="scss" scoped>
@import "./store.scss";
</style>