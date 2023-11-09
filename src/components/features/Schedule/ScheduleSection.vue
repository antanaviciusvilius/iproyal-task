<script setup lang="ts">
import ListComponent from '@/components/shared/List/ListComponent.vue';
import ListDropdown from '@/components/shared/List/ListDropdown.vue';
import type { Schedule } from '@/types/schedule';
import ScheduleListItem from './ScheduleListItem.vue';

const schedule: Schedule = {
  priority: [
    {
      title: 'Review candidate applications',
      date: 'Today - 11.30 AM',
    },
  ],
  other: [
    {
      title: 'Interview with candidates',
      date: 'Today - 11.30 AM',
    },
    {
      title: 'Short meeting with product designer from IT Departement',
      date: 'Today - 09.15 AM',
    },
  ],
};

</script>

<template>
  <ListComponent title="Upcoming Schedule" button-text="Create a New Schedule" class="schedule-list">
    <template #actions>
      <ListDropdown selected="Today, 13 Sep 2021" />
    </template>
    <template #content>
      <h3 class="subtitle">Priority</h3>
      <ScheduleListItem v-for="item in schedule.priority" :event="item" v-bind:key="item.title" />
      <h3 class="subtitle">Other</h3>
      <ScheduleListItem v-for="item in schedule.other" :event="item" v-bind:key="item.title" />
    </template>
  </ListComponent>
</template>

<style scoped>
.subtitle {
    color: var(--primary-subtitle-color);
    font-family: var(--primary-font);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.schedule-list {
    max-height: 385px;
}

@media (min-width: 768px) {
    .schedule-list {
        max-height: 320px;
    }
}

@media (min-width: 1200px) {
    .schedule-list {
        max-height: 424px;
    }
}
</style>
