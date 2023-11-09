<script setup lang="ts">
import ActivitySection from '@/components/features/Activity/ActivitySection.vue';
import AnalyticsDetailedSection from '@/components/features/Analytics/AnalyticsDetailedSection.vue';
import AnalyticsSection from '@/components/features/Analytics/AnalyticsSection.vue';
import ScheduleSection from '@/components/features/Schedule/ScheduleSection.vue';
import SmartphonesSection from '@/components/features/Smartphones/SmartphonesSection.vue';

</script>

<template>
  <div class="page">
    <h1 class="title">
      Dashboard
    </h1>
    <div class="content">
      <div class="section">
        <AnalyticsSection />
        <AnalyticsDetailedSection />
        <SmartphonesSection />
      </div>
      <div class="section-2">
        <ActivitySection />
        <ScheduleSection />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
    margin: 0 20px 33px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.title {
    color: var(--tertiary-color);
    font-family: var(--main-font);
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    margin: 10px 0;
    font-size: 20px;
}

.content {
    width: 100%;
    max-width: 1fr;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
}

.section-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
}

@media (min-width: 768px) {
    .page {
        margin: 0 52px 62px 52px;
    }

    .title {
        font-size: 24px;
    }

    .section-2 {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 16px;
    }
}

@media (min-width: 1200px) {
    .page {
        margin: 0 50px;
    }

    .content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 30px;
    }

    .section-2 {
        display: flex;
        flex-direction: column;
    }
}
</style>
