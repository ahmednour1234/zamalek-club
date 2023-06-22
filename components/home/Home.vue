<template lang="en">
  <div class="cards">
    <div class="cardmatches">
      <div class="frame">
        <h1 class="date">{{ date }}</h1>
        <div class="data">
          <img alt="Zamlek home" class="logoleague" :src="imgcompetation" />
          <div class="info">
            <img
              alt="Zamlek home"
              class="logoleague"
              :src="imgaway"
            />
            <h4>{{ hour }}</h4>
            <img
              alt="Zamlek home"
              class="logoleague"
              :src="imghome"
            />
          </div>
          <div class="name">
            <h3>{{ nameaway }}</h3>
            <h3>vs.</h3>
            <h3>{{ namehome }}</h3>
          </div>
          <h3>Cairo Stadium</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
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
  },
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>