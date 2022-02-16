<template>
    <header>
      <div class="branding">
        <h1>EMMANUEL</h1>
      </div>
      <div class="navigation">
        <ul v-show="!mobile">
          <router-link class="desktop-nav" :to="{name: 'Home'}"><div class="link">Home</div></router-link>
          <router-link class="desktop-nav" :to="{name: 'About'}"><div class="link">About</div></router-link>
          <router-link class="desktop-nav" :to="{name: 'Portfolio'}"><div class="link">Portfolio</div></router-link>
          <router-link class="desktop-nav" :to="{name: 'Contact'}"><div class="link">Contact</div></router-link>
        </ul>
      </div>
      <fa icon='bars' class="bars" v-show="mobile"/>
      <transition name="mob-nav">
        <div class="mob-nav" v-show="mobile">
          <ul v-show="mobile">
            <router-link class="mobile-nav" to="#"><div>Home</div></router-link>
            <router-link class="mobile-nav" to="#">About</router-link>
            <router-link class="mobile-nav" to="#">Portfolio</router-link>
            <router-link class="mobile-nav" to="#">Contact</router-link>
          </ul>
        </div>
      </transition>
    </header>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      mobile: null,
      mobileNavigation: null,
    };
  },
};
</script>
<style scoped>
header {
  padding: 1rem 5rem;
  padding-left: 0rem;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
}
@media (max-width: 750px) {
  header {
    padding: 1rem;
  }
}
h1{
  padding: 0;
}
.branding {
  display: flex;
  font-size: 18px;
  width: 20%;
  color: #3b3b3b;
}
@media(max-width: 750px) {
  .branding {
    font-size: 20px;
  }
}
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.4rem;
  width: 80%;
  cursor: pointer;
  color: #3b3b3b;
}
.bars {
  font-size: 25px;
  padding-top: 10px;
}
.desktop-nav {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  display: inline-block;
  width: auto;
  text-align: center;
  margin: auto;
  text-decoration: none;
  color: #303030;
}

.desktop-nav:last-child {
  padding-right: 0px;
}
.desktop-nav:hover {
  color: #3b3b3b
}
.mob-nav {
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 250px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
}
.mobile-nav {
  display: block;
  padding: 1rem;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
}
</style>
