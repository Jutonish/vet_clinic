<template>
  <div class="container">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="sass">

*
  margin: auto
  max-width: 1440px
  text-align: center
  font-family: "Satoshi", sans-serif
  font-size: 16px

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>



