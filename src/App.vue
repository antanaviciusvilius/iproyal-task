<script setup lang="ts">
</script>

<template>
  <div class="app">
    <sidebar>
      sidebar
    </sidebar>
    <div class="main-container">
      <header>
        header
      </header>
      <main class="main-content">
        main content
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  flex: 1;
}

.main-container {
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
}
</style>
