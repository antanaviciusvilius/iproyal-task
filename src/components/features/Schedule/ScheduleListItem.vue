<script setup lang="ts">
import ListItem from '@/components/shared/List/ListItem.vue';
import HorizontalDotsIcon from '@/components/shared/icons/HorizontalDotsIcon.vue';
import type { Event } from '@/types/schedule';

defineProps<{
  event: Event
}>();
</script>

<template>
  <ListItem>
    <template #content>
      <h4 class="title">
        {{ event.title }}
      </h4>
      <p class="date">{{ event.date }}</p>
    </template>
    <template #action>
      <div class="action">
        <HorizontalDotsIcon />
      </div>
    </template>
  </ListItem>
</template>

<style scoped>
.date {
    color: var(--primary-subtitle-color);
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
}

.title {
    color: var(--secondary-title-color);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 6px;
}
</style>
