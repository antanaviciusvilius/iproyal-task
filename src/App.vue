<script setup lang="ts">
import HeaderComponent from '@/components/features/Header/HeaderComponent.vue';
import SidebarComponent from '@/components/features/SidebarComponent.vue';
import MainComponent from '@/components/pages/MainComponent.vue';

</script>

<template>
  <div class="app">
    <SidebarComponent class="sidebar" />
    <div class="main-container">
      <header class="header">
        <HeaderComponent />
      </header>
      <main class="main-content">
        <MainComponent />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  background-color: var(--just-white-color);
  flex: 1;
}

.main-container {
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
}

.header {
  position: sticky;
  top: 0;
}

.sidebar {
  grid-row: 1/3;
}

.main-content {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .app {
    grid-template-columns: var(--sidebar-width-md) 1fr;
  }

  .main-container {
    grid-column: 2;
  }
}

@media (min-width: 1200px) {

  .app {
    grid-template-columns: var(--sidebar-width-lg) 1fr;
  }

  .main-container {
    grid-column: 2;
  }
}
</style>
