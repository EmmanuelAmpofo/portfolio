<template>
      <footer>
          <div class="copyright">
              Copyright @ 2021
          </div>
          <div class="socials">
              <ul>
                  <router-link class="mobile-footer" to="#"><fa :icon="['fab', 'linkedin']" class="social"/></router-link>
                  <router-link class="mobile-footer" to="#"><fa :icon="['fab', 'github']" class="social"/></router-link>
                  <router-link class="mobile-footer" to="#"><fa icon="envelope" class="social"/></router-link>
              </ul>
          </div>
      </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer {
    display: flex;
    padding: 1rem;
    flex-direction: row;
    margin-top: auto;
}
.copyright {

    font-size: 18px;
    text-align: initial;
    width: 20%;
    padding-left: 4rem;
}
.socials {
    width: 80%;
    font-size: 24px;
    display: flex;
    justify-content: flex-end;
}
.social {
    color: #303030;

}
.mobile-footer{
    padding: 0.5rem; 
}
.mobile-footer:last-child {
    padding-right: 3.7rem;
}

</style>