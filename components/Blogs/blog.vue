<template>
    <header>
    <div class="imgh1">
      <img alt="Zamlek logo" class="imglogo" src="@/assets/image.png" />
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
    <div class="blogs">
      <div class="blog1">
        <img alt="" src="@/assets/blog1.png" />
        <div class="info">
  <h1>Mortada Leaves Zamalek</h1>
  <p v-if="!readMoreActivated">
      {{longText.slice(0, 200)}}
  </p>
  <a class="readmore" v-if="!readMoreActivated" @click="activateReadMore" href="#">
Read more...
</a>
<span v-if="readMoreActivated" v-html="longText"></span>
</div>
      </div>
      <div class="blog2">
        <div class="info">
  <h1>Zizo Renew to Zamalek</h1>
  <p v-if="!readMoreActivated">
      {{longText.slice(0, 200)}}
  </p>
  <a class="readmore" v-if="!readMoreActivated" @click="activateReadMore" href="#">
Read more...
</a>
<span v-if="readMoreActivated" v-html="longText"></span>
</div>
        <img alt="" src="@/assets/blog2.png" />
      </div>
      <div class="blog3">
        <img alt="" src="@/assets/blog3.png" />
        <div class="info">
  <h1>A Businessman Interested in Building Zamalek Stadium</h1>
  <p v-if="!readMoreActivated">
      {{longText.slice(0, 200)}}
  </p>
  <a class="readmore" v-if="!readMoreActivated" @click="activateReadMore" href="#">
Read more...
</a>
<span v-if="readMoreActivated" v-html="longText"></span>
</div>
      </div>
    </div>
    <div class="last">
      <h4>THE <span style="color: black">CULERS</span> WALL</h4>
      <h5 style="color: black; font-size: xx-large; font-style: italic"
        >TOPIC OF THE DAY..</h5
      >
      <h4>Zamalek Send in your messages of support 💪</h4>
      <button class="have" type="submit">HAVE YOUR SAY</button>
    </div>
  </template>
  <script>
export default {
    name: "blog",
    data(){
        return{
            longText:`Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book.
                    It has survived not only five`,
                    readMoreActivated: false
        }
    },
methods: {
    activateReadMore(){
        this.readMoreActivated = true;
    },
}
};
</script>
<style lang="scss" scoped>
@import "./blog.scss";
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
.imglogo {
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
    color: #000000;
  }
}
</style>