<template>
  <div class="main">
    <div class="image">
      <img src="../assets/poff5.png" alt="" />
    </div>
    <div class="about">
      <div class="about-me">
        <div class="about-text">ABOUT ME</div>
        <div class="span-1"></div>
      </div>
      <div class="grid-container">
        <div class="profile-about">
          I am a dynamic and creative frontend developer with top-notch coding
          skills in JavaScript, Vue Js, React Js, Web Design, high energy
          approach, well developed skills in Agile methodology and a user
          focused philosophy.
          <p></p>
          With over 5 years of professional experience in software engineering,
          i have acquired the skills and knowledge necessary to make your
          project a success
        </div>
        <div class="profile-address">
          <div class="name">
            <div>Name:</div>
            <span class="span-2">Emmanuel Darkwah Ampofo</span>
          </div>
          <div class="name">
            <div>Address:</div>
            <span class="span-2">Liberation Crescent</span>
          </div>
          <div class="name">
            <div>Stack:</div>
            <span class="span-2">JavaScript | WordPress</span>
          </div>
          <div class="name">
            <div>Framework:</div>
            <span class="span-2">Vue Js | React Js</span>
          </div>
          <div class="name">
            <div>E-mail:</div>
            <span class="span-2">aristocrat0271@gmail.com</span>
          </div>
          <div class="name">
            <div>Phone:</div>
            <span class="span-2">+233 (0) 241238018</span>
          </div>
        </div>

        <div class="service">
          <div class="service-text">
            SERVICES
            <div class="span-3"></div>
          </div>
          <div class="list">
            <div class="items">
              <fa icon="caret-right" class="icon" />Web Development
            </div>
            <div class="items">
              <fa icon="caret-right" class="icon" />Web Development
            </div>
            <div class="items">
              <fa icon="caret-right" class="icon" />Web Development
            </div>
            <div class="items">
              <fa icon="caret-right" class="icon" />Web Development
            </div>
          </div>
        </div>
        <div class="interest">
          <div class="service">
            <div class="service-text">
              INTEREST
              <div class="span-3"></div>
            </div>
            <div class="list">
              <div class="items">
                <fa icon="caret-right" class="icon" />Coding
              </div>
              <div class="items">
                <fa icon="caret-right" class="icon" />Algorithms
              </div>
              <div class="items">
                <fa icon="caret-right" class="icon" />Research
              </div>
              <div class="items">
                <fa icon="caret-right" class="icon" />Learning
              </div>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="service-text">
            PROGRAMMING
            <div class="span-3"></div>
          </div>
          <div class="list">
            <div class="per">
              <div class="percent-1">
                HTML & CSS
                <div class="span-4">95%</div>
              </div>
            </div>

            <div class="bar">
              <div class="bar-inner"></div>
            </div>
            <div class="per">
              <div class="percent">
                JavaScript
                <div class="span-4">90%</div>
              </div>
            </div>

            <div class="bar">
              <div class="bar-inner-1"></div>
            </div>
            <div class="per">
              <div class="percent">
                WordPress
                <div class="span-4">90%</div>
              </div>
            </div>

            <div class="bar">
              <div class="bar-inner-2"></div>
            </div>
            <div class="per">
              <div class="percent">
                Java
                <div class="span-4">75%</div>
              </div>
            </div>

            <div class="bar">
              <div class="bar-inner-3"></div>
            </div>
          </div>
        </div>
        <div class="interest">
          <div class="service-1">
            <div class="service-text">
              LANGUAGE
              <div class="span-3"></div>
            </div>
            <div class="box">
              <div class="centage">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div class="number">
                  <h2>80 <span>%</span></h2>
                </div>
              </div>
              <div class="per-text">English</div>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="service-text">
            EDUCATION
            <div class="span-3"></div>
          </div>
          <div class="list">
            <div class="items">
              <fa icon="graduation-cap" class="icon" />AmaliTech Graduate
              Training
            </div>
            <div class="items">
              <fa icon="graduation-cap" class="icon" />Codecademy
            </div>
            <div class="items">
              <fa icon="graduation-cap" class="icon" />Certified Learning
              Solutions Gh Ltd
            </div>
            <div class="items">
              <fa icon="graduation-cap" class="icon" />Ghana Technology
              University College
            </div>
          </div>
        </div>
        <div class="interest">
          <div class="service">
            <div class="service-text">
              EXPERIENCE
              <div class="span-3"></div>
            </div>
            <div class="list experience">
              <div class="experience2">
                <div class="years">
                  <fa icon="user-tie" class="icon" /><span class="yrs">present</span> 
                </div>
                <div class="years">
                  <fa icon="user-tie" class="icon" /><span class="yrs">present</span>
                </div>
                <div class="years">
                  <fa icon="user-tie" class="icon" /><span class="yrs">2020</span>
                </div>
                <div class="years">
                  <fa icon="user-tie" class="icon" /><span class="yrs">2018</span>
                </div>
              </div>
              <div class="experience1">
                <div class="inner-exp">
                  <div class="items inner">
                     Lasting Dynamics Academy
                  </div>
                  <div class="items inner">
                    AmaliTech Services
                  </div>
                  <div class="items inner">
                    OctaMesh Technologies
                  </div>
                  <div class="items inner">
                    Tang Palace Hotel
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 84vh;
  overflow: hidden;
  font-size: 18px;
}
.about {
  background: #f6fbff;
  padding: 5.5rem;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.about::-webkit-scrollbar {
  display: none;
}
.about-me {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  display: flex;
}
.about-text {
  width: 20%;
}
.span-1 {
  border-top: 3px solid #b9b8c3;
  width: 83%;
  display: flex;
  margin-top: 0.6rem;
}
.profile-about {
  color: #b9b8c3;
  width: 100%;
  line-height: 1.4;
  text-align: justify;
}
.profile-address {
  width: 100%;
  line-height: 2;
  color: #b9b8c3;
}
.name {
  font-weight: bolder;
}
.name > div {
  display: inline-block;
  width: 25%;
  margin-right: 1.1rem;
}
.span-2 {
  font-weight: 500;
}
.services {
  margin-top: 3rem;
}
.service {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.service-1 {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border: solid;
}

.service-text {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  display: flex;
}
.span-3 {
  border-top: 3px solid #b9b8c3;
  width: 63%;
  display: flex;
  margin-top: 0.6rem;
  margin-left: 2rem;
}
.span-4 {
  color: #b9b8c3;
  width: 10%;
  display: flex;
  justify-content: flex-end;
  letter-spacing: 0;
}
.grid-container {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
.icon {
  padding-right: 0.8rem;
  color: #b9b8c3;
}
.items {
  color: #b9b8c3;
  padding-bottom: 1rem;
}
/* .inner {
  color: #000;
  font-weight: 500;
} */
.list {
  margin-top: 3.5rem;
}
.bar {
  background-color: #b9b8c3;
  height: 3px;
  margin-top: 0.4rem;
}
.bar-inner {
  background-color: #7d7789;
  height: 3px;
  width: 95%;
}
.bar-inner-1 {
  background-color: #7d7789;
  height: 3px;
  width: 90%;
}
.bar-inner-2 {
  background-color: #7d7789;
  height: 3px;
  width: 90%;
}
.bar-inner-3 {
  background-color: #7d7789;
  height: 3px;
  width: 75%;
}
.per {
  display: flex;
}
.percent {
  color: #b9b8c3;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
}
.percent-1 {
  color: #b9b8c3;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.circle-wrap {
  margin: 70px auto;
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}
.mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
}
.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}
.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(135deg);
}
@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
.circle-wrap .inside-circle {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: #d2eaf1;
  line-height: 120px;
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: #1e51dc;
  /* position: absolute; */
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
.box .centage svg circle {
  position: relative;
  fill: none;
  stroke-width: 10;
  stroke: #000;
  transform: translate(5px, 5px);
}
.box .centage .number {
  position: relative;
  top: 0;
  left: 0;
  color: #b9b8c3;
}
.experience {
  display: flex;
  grid-template: 1fr 1fr;
}
.experience1 {
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  padding-left: 10px;
}
.experience2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.years {
  color: #b9b8c3;
  padding-bottom: 1rem;
}
.yrs {
  font-weight: 400;
  padding: 3px 6px;
  border-radius: 50px ;
  background-color: #e9eef2;
}
</style>
