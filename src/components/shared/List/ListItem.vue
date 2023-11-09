<template>
  <div class="card">
    <div class="card-content">
      <slot name="content" />
    </div>
    <div class="card-action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.card {
    display: flex;
    padding: 12px 16px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 6px;
    border: 0.5px solid #e0e0e0;
    background: var(--background-color);
    padding: 12px 16px;
}

.card:hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.card-content {
    flex: 1;
}

.card-action {
    display: flex;
    justify-content: end;
    max-width: 68px;
}
</style>
