<script setup lang="ts">
import ArrowDownIcon from '@/components/shared/icons/ArrowDownIcon.vue';

export interface UserProperties {
  image: string;
  fullName: string;
}

defineProps<{
  user: UserProperties
}>();
</script>

<template>
  <div class="user-actions">
    <img class="image" :src="user.image" alt="avatar" />
    <span class="name">{{ user.fullName }}</span>
    <ArrowDownIcon />
  </div>
</template>

<style scoped>
.user-actions {
    display: flex;
    align-items: center;
    margin: 0 9px;
    gap: 12px;
    cursor: pointer;
}

.image {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    color: var(--tertiary-color);
    font-family: var(--main-font);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: none;
}

@media (min-width: 1200px) {
    .name {
        display: flex;
    }
}
</style>
