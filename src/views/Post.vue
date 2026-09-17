<script setup>
import { computed } from 'vue'

// Dados carregados do arquivo externo /data/scripts.js (editável em produção)
const SCRIPTS = window.__SCRIPTS__ || []

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const script = computed(() => SCRIPTS.find((s) => s.slug === props.slug))
</script>

<template>
  <main class="container page-content post-page">
    <router-link to="/" class="back-link">&larr; Voltar</router-link>

    <template v-if="script">
      <div class="post-thumb">
        <img v-if="script.thumbnail" :src="script.thumbnail" :alt="script.title">
        <span v-else>{{ script.title }}</span>
      </div>

      <span class="card-category">{{ script.category }}</span>
      <h1>{{ script.title }}</h1>
      <p class="post-meta">{{ script.author }} &middot; {{ script.date }}</p>

      <p class="post-description">{{ script.description }}</p>

      <h2 class="download-heading">Download abaixo</h2>
      <div v-if="script.downloads?.length" class="download-buttons">
        <a
          v-for="dl in script.downloads"
          :key="dl.url + dl.label"
          class="card-link download-btn"
          :href="dl.url"
          target="_blank"
          rel="noopener"
        >
          {{ dl.label }}
        </a>
      </div>
      <p v-else class="empty-state">Nenhum link de download cadastrado para este item.</p>
    </template>

    <p v-else class="empty-state">
      Nenhum script/executor encontrado
    </p>
  </main>
</template>
