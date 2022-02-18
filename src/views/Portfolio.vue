<template>
  <div>
    <div class="main">
      <div class="image">
        <img src="../assets/poff5.png" alt="" />
      </div>
      <div class="portfolio">
        <div class="portfolio-my">
          <div class="portfolio-text">CREATIVE PORTFOLIO</div>
          <div class="span-1"></div>
        </div>
        <div class="cards">

          <div class="in">
            <img src="../assets/amalifair.jpg" alt="">
          </div>
          <div class="in2">
            <img src="../assets/capture.jpg" alt="">
          </div>
          <div class="in2">image</div>
          <div class="in2">image</div>
          <div class="in2">image</div>
          <div class="in2">image</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.portfolio {
  background: #f6fbff;
  padding: 5.5rem;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.portfolio::-webkit-scrollbar {
  display: none;
}
.portfolio-my {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  display: flex;
}
.portfolio-text {
  width: 50%;
}
.span-1 {
  border-top: 3px solid #b9b8c3;
  width: 83%;
  display: flex;
  margin-top: 0.6rem;
}
.cards {
  border: 1px solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-top: 5rem;
}
.in {
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px solid greenyellow;
}
.in2 {
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px solid red;
}

</style>
