<template>
  <div class="frames">
    <div class="frame">
      <div class="first">
        <img alt="Zamlek home" class="logoleague" :src="imgcompetation" />
        <h2>Egyptian League</h2>
      </div>
      <div class="allinfo">
        <div class="finfo">
          <h3>{{ date }}</h3>
          <h3>Group Stage</h3>
        </div>
        <div class="sinfo">
          <img alt="Zamlek home" class="logoleague" :src="imgaway" />
          <h3>{{ nameaway }}</h3>
          <h4>{{ hour }}</h4>
          <h3>{{ namehome }}</h3>
          <img alt="Zamlek home" class="logoleague" :src="imghome" />
        </div>
        <h3>Cairo Stadium</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Match",
  props: {
    id: Number,
    date: Date,
    competation: String,
    imgcompetation: String,
    imghome: String,
    hour: String,
    namehome: String,
    nameaway: String,
    imgaway: String,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    computed_products: function () {
      let filterType = this.type;
      return this.products.filter(function (products) {
        let filtered = true;
        if (filterType && filterType.length > 0) {
          filtered = products.type == filterType;
        }
        return filtered;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./match.scss";
</style>