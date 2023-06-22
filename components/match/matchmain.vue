<template>
  <header>
    <div class="imgh1">
      <img alt="Zamlek logo" src="@/assets/image.png" />
      <h1 class="h1">EL-ZAMALEK CLUB</h1>
    </div>
    <div class="router">
      <router-link to="/">Home</router-link>
      <router-link to="/storemain">Store</router-link>
      <router-link to="/matchmain">Matches</router-link>
      <router-link to="/blog">Transfers</router-link>
      <router-view />
    </div>
    <button type="submit">Book Ticket</button>
  </header>
  <div class="frame1">
    <h1>{{competation}}</h1>
    <div class="icon">
      <select @click="updateList()"
        name="competation"
        id="competation"
        v-model="competation">
        <option value="All Tournaments">All Tournaments</option>
        <option value="Egyptian League">Egyptian League</option>
        <option value="African Champions">African Champions</option>
      </select>
    </div>
  </div>
  <vue-carousel
    v-for="products in products"
    class="frames"
    :key="products.id"
    :id="products.id"
    :date="products.date"
    :competation="products.competation"
    :imgcompetation="products.imgcompetation"
    :imghome="products.imghome"
    :hour="products.hour"
    :namehome="products.namehome"
    :nameaway="products.nameaway"
    :imgaway="products.imgaway"
  >
    <Match v-bind="products" class="frames" />
  </vue-carousel>
  <div class="last">
    <h2>THE <span style="color: black">CULERS</span> WALL</h2>
    <span style="color: black; font-size: xx-large; font-style: italic"
      >TOPIC OF THE DAY..</span
    >
    <h2>Zamalek Send in your messages of support 💪</h2>
    <button class="have" type="submit">HAVE YOUR SAY</button>
  </div>
</template>
  <script>
import data from '@/Apis/Api.js';
import Match from "./match.vue";
export default {
  name: "Matchmain",
  components: {
    Match,
  },
    data() {
    return {
      data:data ,
      products:data,
      competation: "All Tournaments",
    };
  },
  mounted() {
    this.products = this.data;
  },
  methods: {
    updateList() {
      this.products = [];
      this.products =
        this.competation === "All Tournaments"
          ? (this.products = data)
          : data.filter((products) => products.competation === this.competation);
    },
  },
};
</script>
  <style lang="scss" scoped>
@import "./match.scss";
header {
  background-color: rgb(255, 255, 255);
  width: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  gap: 50px;
}
img {
  width: 60px;
  height: 80px;
}
.h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: #d22a2a;
}
.imgh1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;
}
button {
  width: 214px;
  height: 62px;
  background: #d22a2a;
  border-radius: 10px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 39px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  gap: 150px;
  background-color: #ffffff;
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;
    text-decoration: none;

    color: #000000;
    &.router-link-exact-active {
      color: #d22a2a;
    }
  }
  .router {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 80px;
  }
}
</style>