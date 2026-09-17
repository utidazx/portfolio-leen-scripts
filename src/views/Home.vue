<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import ScriptCard from "../components/ScriptCard.vue";

// Dados carregados do arquivo externo /data/scripts.js (editável em produção)
const SCRIPTS = window.__SCRIPTS__ || [];

const route = useRoute();
const activeCategory = ref(route.query.categoria || "all");
const searchTerm = ref("");

watch(
  () => route.query.categoria,
  (categoria) => {
    activeCategory.value = categoria || "all";
  },
);

const categories = computed(() =>
  Array.from(new Set(SCRIPTS.map((s) => s.category))).sort(),
);

const filteredScripts = computed(() =>
  SCRIPTS.filter((s) => {
    const matchesCategory =
      activeCategory.value === "all" || s.category === activeCategory.value;
    const matchesSearch = s.title
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    return matchesCategory && matchesSearch;
  }),
);
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
    </div>
  </section>

  <main class="container">
    <div class="search-bar">
      <input v-model="searchTerm" type="text" />
    </div>

    <div class="category-filters">
      <button
        class="filter-btn"
        :class="{ active: activeCategory === 'all' }"
        @click="activeCategory = 'all'"
      >
        Todos
      </button>
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ active: activeCategory === cat }"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="filteredScripts.length" class="grid">
      <ScriptCard
        v-for="script in filteredScripts"
        :key="script.slug"
        :script="script"
      />
    </div>
    <p v-else class="empty-state">
      Nenhum resultado encontrado.
    </p>
  </main>
</template>
