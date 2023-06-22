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
  <div class="frame">
    <div class="rectangel">
      <div class="info">
        <img alt="Zamlek product" class="product" src="@/assets/shirtw.png" />
        <div class="data">
          <h1>T-Shirt Basket</h1>
          <p>Price:150$....</p>
          <span>4.9 Ratings + 2.4k Reviews + 1k Sold.</span>
          <p>Choose Color:</p>
          <div class="inputtype">
            <input type="checkbox" name="White" id="type" />White
            <input type="checkbox" name="Black" id="type" />Black
            <input type="checkbox" name="Blue" id="type" />Blue
            <input type="checkbox" name="Green" id="type" />Green
          </div>
          <p>Choose Size:</p>
          <div class="inputsize">
            <form>
              <input type="radio" id="M" name="size" value="M" />
              <label for="M">M</label>
              <input type="radio" id="L" name="size" value="L" />
              <label for="L">L</label>
              <input type="radio" id="XL" name="size" value="XL" />
              <label for="XL">XL</label>
              <input type="radio" id="XXL" name="size" value="XXL" />
              <label for="XXL">XXL</label>
            </form>
          </div>
        </div>
        <div class="inputs">
          <input type="text" placeholder="Enter Code" class="enter" />
          <button class="buy" type="submit">Buy Now</button>
          <button class="add" type="submit">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
};
</script>
<style lang="scss" scoped>
@import "./cart.scss";
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