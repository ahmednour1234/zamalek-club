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
  <div class="cgall">
    <h1>Category Store</h1>
    <div class="cardall">
  <div class="cgcard">
  <img alt="Zamlek shirts" class="category" src="@/assets/shirts.png" />
  <router-link to="/" style="color:white">T-Shirts</router-link>
</div>
<div class="cgcard">
  <img alt="Zamlek shirts" class="category" src="@/assets/acc.png" />
  <router-link to="/" style="color:rgb(255, 255, 255)">Accessories</router-link>
</div>
<div class="cgcard">
  <img alt="Zamlek shirts" class="category" src="@/assets/kids.png" />
  <router-link to="/" style="color:white">Kids & infant</router-link>
</div>
</div>
</div>
</div>
<div class="frame2">
  <div class="prall">
  <h1>T-Shirts</h1>
  <h1></h1>
  </div>
  <div class="prcards">
    <vue-carousel v-for="Tshirts in Tshirts" class="prcards" :key="Tshirts.id" :id="Tshirts.id" :desc="Tshirts.desc" :price="Tshirts.price"
        :i6mg="Tshirts.img" >
    <store v-bind="Tshirts" />
    </vue-carousel>
    </div>
  </div>
</template>
<script>
import store from "./store.vue";
export default {
    methods: {
        cartlist() {
            this.$router.push({
                name: "cartlist",
                params: { id },
            })
        },
    },
    name: "storemain",
    components: {
        store,
    },
    computed: {
      Tshirts() {
            return this.$store.state.Tshirts;
        },
    },
};
</script>
<style lang="scss" scoped>
@import "./store.scss";
header{
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
      color: #df1717;
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
