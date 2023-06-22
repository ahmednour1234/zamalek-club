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
  <div class="all">
    <div class="frame1">
      <div class="rectangel">
        <h1>Centry Club</h1>
        <p>The most titled club in the twentieth century</p>
        <button class="know" type="submit">Know More</button>
      </div>
      <img alt="Zamlek home" class="home" src="@/assets/home.png" />
    </div>
    <div class="nextmatches">
      <h2>ZAMALEK First Team Matches</h2>
      <div class="timenext">
        <h3>
          Next Match
          <h4>{{ time }}</h4>
        </h3>
      </div>
      <h3>Sync Schedules to Calendar</h3>
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        v-for="products in products"
        class="cards"
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
        <Home v-bind="products" class="cards" />
      </swiper>
    </div>
    <div class="buttons">
      <div class="button1" v-on:click="next()"></div>
      <div class="button" v-on:click="prev()"></div>
      <div class="button1"></div>
    </div>
    <div class="Tickets">
      <h2>ZAMALEK Tickets</h2>
      <div class="categories">
        <img alt="Zamlek home" class="imagecag" src="@/assets/stadium.png" />
        <img alt="Zamlek home" class="imagecag" src="@/assets/foot.png" />
        <img alt="Zamlek home" class="imagecag" src="@/assets/basket.png" />
        <img alt="Zamlek home" class="imagecag" src="@/assets/hand.png" />
        <img alt="Zamlek home" class="imagecag" src="@/assets/volley.png" />
        <img alt="Zamlek home" class="imagecag" src="@/assets/women.png" />
      </div>
    </div>
    <div class="stores">
      <h2>Zamalek Stores</h2>
      <div class="cardshirt">
        <div class="cardstore">
          <div class="backshirt1">
            <img
              alt="Zamlek home"
              class="imagestore"
              src="@/assets/image.png"
            />
          </div>
          <div class="infoshirt">
            <img
              alt="Zamlek home"
              class="imageshirt"
              src="@/assets/shirtw.png"
            />
            <div class="datashirt">
              <h3>HOME KIT 22/23</h3>
              <h3>The colors Of passion</h3>
              <router-link to="/cart">
                <h2>SHOP NOW</h2>
              </router-link>
            </div>
          </div>
        </div>
        <div class="cardstore">
          <div class="backshirt2">
            <img
              alt="Zamlek home"
              class="imagestore"
              src="@/assets/image.png"
            />
          </div>
          <div class="infoshirt">
            <img
              alt="Zamlek home"
              class="imageshirt"
              src="@/assets/shirtb.png"
            />
            <div class="datashirt">
              <h3>HOME KIT 22/23</h3>
              <h3>The colors Of passion</h3>
              <router-link to="/cart">
                <h2>SHOP NOW</h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="cardstore">
        <div class="backshirt3">
          <img alt="Zamlek home" class="imagestore" src="@/assets/image.png" />
        </div>
        <div class="infoshirt">
          <img alt="Zamlek home" class="imageshirt" src="@/assets/shirtg.png" />
          <div class="datashirt">
            <h3>HOME KIT 22/23</h3>
            <h3>The colors Of passion</h3>
            <router-link to="/cart">
              <h2>SHOP NOW</h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="last">
      <h1>THE <span style="color: black">CULERS</span> WALL</h1>
      <span style="color: black; font-size: xx-large; font-style: italic"
        >TOPIC OF THE DAY..</span
      >
      <h1>Zamalek Send in your messages of support 💪</h1>
      <button class="have" type="submit">HAVE YOUR SAY</button>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import Home from "./Home.vue";
export default {
  name: "Homemain",
  components: {
    Home,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
  computed: {
    products() {
      return this.$store.state.products.slice(0, 3);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
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