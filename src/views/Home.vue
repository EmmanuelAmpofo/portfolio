<template>
  <div class="main">
    <div class="image">
      <img src="../assets/poff5.png" alt="" />
    </div>
    <div class="welcome">
      <h1>EMMANUEL DARKWAH AMPOFO</h1>
      <div class="border"></div>
      <p class="p">Creative <span>Frontend Developer</span></p>
      <button>Get in Touch</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 4.8rem;
  height: 84vh;
  overflow: hidden;
}
.image {
  overflow: hidden;
}
img {
  width: 100%;
  margin: 0 0 0 5rem;
  overflow: hidden;
}
.welcome {
  background-color: #f6fbff;
  align-items: left;
  padding: 18rem 0;
  flex-direction: column;
}
h1 {
  font-weight: 700;
  font-size: 46px;
  margin-left: 5rem;
}
.border {
  margin: 1rem 0;
  border-bottom: 5px solid;
  width: 7%;
  margin-left: 5rem;
}
p {
  font-size: 20px;
  margin: 1rem 0;
  margin-left: 5rem;
}
span {
  font-weight: 600;
}
button {
  background-color: #303030;
  color: white;
  border: none;
  width: 10rem;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 20px;
  margin-left: 5rem;
  cursor: pointer;
}
button:hover {
  background-color: #5a5959;
}
</style>
