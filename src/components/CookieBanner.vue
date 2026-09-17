<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const show = ref(false);

onMounted(() => {
  // Limpa e verifica o consentimento salvo
  const consent = localStorage.getItem("cookie-consent");
  if (!consent) {
    setTimeout(() => {
      show.value = true;
    }, 600);
  }
});

function accept() {
  localStorage.setItem("cookie-consent", "accepted");
  show.value = false;
}

function decline() {
  localStorage.setItem("cookie-consent", "declined");
  show.value = false;
}

function openPolicy() {
  show.value = false;
  router.push("/politica-privacidade");
}
</script>

<template>
  <Transition name="cookie-fade">
    <div v-if="show" class="cookie-wrapper">
      <div class="cookie-box">
        <span class="cookie-emoji">🍪</span>
        <div class="cookie-body">
          <p class="cookie-msg">
            Usamos <strong>cookies</strong> e tecnologias de terceiros para
            melhorar sua experiência e exibir anúncios. Ao continuar, você
            concorda com nossa
            <button class="cookie-link" @click="openPolicy">
              Política de Privacidade</button
            >.
          </p>
        </div>
        <div class="cookie-btns">
          <button class="cookie-btn-decline" @click="decline">Recusar</button>
          <button class="cookie-btn-accept" @click="accept">Aceitar</button>
        </div>
      </div>
    </div>
  </Transition>
</template>
