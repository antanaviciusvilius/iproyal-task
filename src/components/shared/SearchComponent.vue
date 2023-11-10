<script setup lang="ts">
import SearchIcon from '@/components/shared/icons/SearchIcon.vue';

</script>
<template>
  <SearchIcon class="search-btn" />
  <div class="search-container">
    <label for="search" class="search-label">Search</label>
    <input id="search" type="search" placeholder="Search">
    <SearchIcon class="input-search-icon" />
  </div>
</template>
<style scoped>
.search-label {
    display: none;
}
.search-container {
    display: none;
    position: relative;
    background-color: var(--background-color);
    border-radius: 4px;
    border: var(--border-style);
}

input[type='search'] {
    border: none;
    width: 100%;
    align-items: center;
    flex-shrink: 0;
    background: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 6px 16px;
    z-index: 0;
}

input[type='search']::placeholder {
    color: #b3b3b3;
}

.input-search-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
}

.search-btn:hover {
    cursor: pointer;
    color: var(--main-color-lighten);
}

@media (min-width: 768px) {
    .search-btn {
        display: none;
    }

    .search-container {
        display: flex;
    }
}
</style>
