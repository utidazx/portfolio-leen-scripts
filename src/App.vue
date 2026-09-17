<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <NavBar />
  <router-view />
  <FooterBar />
  <CookieBanner />
</template>
