<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>

import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
}

</style>
