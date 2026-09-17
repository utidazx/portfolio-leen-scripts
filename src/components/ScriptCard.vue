<script setup>
defineProps({
  script: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link :to="`/post/${script.slug}`" class="card">
    <div class="card-thumb">
      <img v-if="script.thumbnail" :src="script.thumbnail" :alt="script.title">
      <span v-else>{{ script.title }}</span>
    </div>
    <div class="card-body">
      <span class="card-category">{{ script.category }}</span>
      <h3 class="card-title">{{ script.title }}</h3>
      <p class="card-desc">{{ script.description }}</p>
      <div class="card-meta">
        <span>{{ script.author }}</span>
        <span>{{ script.date }}</span>
      </div>
      <span class="card-link">Ver detalhes</span>
    </div>
  </router-link>
</template>
