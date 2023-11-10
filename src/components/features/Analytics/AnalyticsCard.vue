<script setup lang="ts">

defineProps<{
  backgroundColor?: string;
  padding?: string;
}>();
</script>

<template>
  <div class="card" v-bind:style="{ backgroundColor: backgroundColor, padding }">
    <div class="left-container">
      <h3 class="title">
        <slot name="title" />
      </h3>
      <span class="number">
        <slot name="number" />
      </span>
      <a class="subtitle">
        <slot name="subtitle" />
      </a>
    </div>
    <div class="right-container">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.card {
    width: 100%;
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    padding: 12px 20px;
}

.card:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.left-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.title {
    align-self: stretch;
    color: var(--tertiary-color);
    font-family: var(--main-font);
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    white-space: nowrap;
    font-size: 16px;
}

.number {
    color: var(--tertiary-color);
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    font-size: 32px;
    font-family: var(--main-font);
}

.subtitle {
    color: var(--primary-subtitle-color);
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-size: 14px;
    white-space: nowrap;
}

.right-container {
    display: flex;
    flex: 1;
    justify-content: right;
    align-items: center;
}

@media (min-width: 1200px) {
    .title {
        font-size: 18px;
    }

    .number {
        font-size: 36px;
    }

    .subtitle {
        font-size: 16px;
    }
}
</style>
