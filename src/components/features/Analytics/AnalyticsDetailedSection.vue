<script setup lang="ts">

import employeesGraph from '@/assets/employees-graph.png';
import talentGraph from '@/assets/talent-graph.png';
import AnalyticsCard from '@/components/features/Analytics/AnalyticsCard.vue';
import BadgeComponent from '@/components/shared/BadgeComponent.vue';
import type { DetailedAnalytics } from '@/types/analytics';

const analyticsData: DetailedAnalytics[] = [
  {
    title: 'Total Employees',
    number: 216,
    men: 120,
    women: 96,
    graphPath: employeesGraph,
    increasePastMonth: '+2% Past month',
  },
  {
    title: 'Talent Request',
    number: 16,
    men: 6,
    women: 10,
    graphPath: talentGraph,
    increasePastMonth: '+5% Past month',
  },
];

</script>

<template>
  <section class="container">
    <AnalyticsCard class="detailed-analytics" v-for="card in analyticsData" :key="card.title" padding="20px">
      <template #title>
        {{ card.title }}
      </template>
      <template #subtitle>
        <div class="gender-container">
          <p>{{ card.men }} Men</p>
          <p>{{ card.women }} Women</p>
        </div>
      </template>
      <template #number>
        {{ card.number }}
      </template>
      <template #right>
        <div class="graph-image">
          <img :src="card.graphPath" alt="{{ card.title }} graph" />
          <BadgeComponent>
            {{ card.increasePastMonth }}
          </BadgeComponent>
        </div>
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

.detailed-analytics {
    border: var(--border-style);
}

.gender-container p {
    font-size: 12px;
}

@media (min-width: 768px) {
    .container {
        display: flex;
        flex-direction: row;
        gap: 14px;
    }
}
</style>
