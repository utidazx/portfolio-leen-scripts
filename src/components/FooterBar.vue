<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-links">
        <router-link to="/termos-de-uso">Termos de uso</router-link>
        <router-link to="/politica-privacidade">Política de privacidade</router-link>
        <p>Contato</p>
      </div>
    </div>
  </footer>
</template>
