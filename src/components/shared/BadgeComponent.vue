<script setup lang="ts">

</script>
<template>
  <div class="badge-container">
    <p>
      <slot />
    </p>
  </div>
</template>
<style scoped>
.badge-container {
    display: flex;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background-color: #FFEFE7;
}

.badge-container p {
    color: var(--secondary-title-color);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
</style>
