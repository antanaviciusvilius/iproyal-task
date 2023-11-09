<script setup lang="ts">
import AnalyticsCard from '@/components/features/Analytics/AnalyticsCard.vue';
import { type Analytics } from '@/types/analytics';

const analyticsData: Analytics[] = [
  {
    title: 'Available Position',
    subtitle: '4 Urgently needed',
    number: 24,
    backgroundColor: '#ffefe7',
    subtitleColor: 'var(--main-color)',
  },
  {
    title: 'Job Open',
    subtitle: '4 Active hiring',
    number: 10,
    backgroundColor: '#e8f0fb',
    subtitleColor: '#3786f1',
  },
  {
    title: 'New Employees',
    subtitle: '4 Department',
    number: 24,
    backgroundColor: '#fdebf9',
    subtitleColor: '#ee61cf',
  },
];
</script>

<template>
  <section class="container">
    <AnalyticsCard
      v-for="card in analyticsData"
      :key="card.title"
      :background-color="card.backgroundColor"
    >
      <template #title>
        {{ card.title }}
      </template>
      <template #subtitle>
        <span v-bind:style="{ color: card.subtitleColor }">{{ card.subtitle }}</span>
      </template>
      <template #number>
        {{ card.number }}
      </template>
    </AnalyticsCard>
  </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@media (min-width: 768px) {
    .container {
        display: flex;
        flex-direction: row;
        gap: 14px;
    }
}
</style>
