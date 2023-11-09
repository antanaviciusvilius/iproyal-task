<script setup lang="ts">
defineProps<{
  title: string;
  buttonText: string;
}>();
</script>
<template>
  <div class="list-container">
    <div class="list-top">
      <div class="list-title">
        {{ title }}
      </div>
      <div class="list-actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="list-content">
      <slot name="content" />
    </div>
    <div class="list-bottom">
      <button class="button" type="button">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.list-container {
    width: 100%;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    background: var(--just-white-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.list-top {
    padding: 16px 22px 16px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.list-actions {
    display: flex;
    align-items: center;
}

.list-content {
    overflow-y: auto;
    padding: 0 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    scrollbar-width: none;
}

.list-content::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.divider {
    border-bottom: var(--divider-style);
}

.list-title {
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}

.button {
    color: var(--main-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    border: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    padding: 10px;
}

.button:hover {
    height: 38px;
    background: #f5f5f5;
    border-radius: 0px 0px 10px 10px;
}

.list-bottom {
    height: 39px;
    border-top: 1px solid var(--divider-color);
}
</style>
