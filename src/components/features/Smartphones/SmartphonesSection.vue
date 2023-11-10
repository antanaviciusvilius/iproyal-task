<script setup lang="ts">
import ListComponent from '@/components/shared/List/ListComponent.vue';
import ListDropdown from '@/components/shared/List/ListDropdown.vue';
import RefreshIcon from '@/components/shared/icons/RefreshIcon.vue';
import getPhones from '@/helpers/getPhones';
import sort from '@/helpers/sort';
import type { Smartphone, SmartphonesSortOptionsType } from '@/types/smartphone';
import { computed, onMounted, ref } from 'vue';
import SmartphoneListItem from './SmartphoneListItem.vue';

const sortOptions: (keyof SmartphonesSortOptionsType)[] = [
  'title',
  'price',
  'rating',
];

const smartPhones = ref<Smartphone[]>([]);

const fetchPhones = async () => {
  try {
    smartPhones.value = await getPhones();
  } catch (error) {
    console.error('Failed to fetch smartphone data:', error);
  }
};

onMounted(async () => {
  fetchPhones();
});

const selectedSortOption = ref<keyof SmartphonesSortOptionsType>(sortOptions[0]);
const sortedSmartphones = computed(() => sort(smartPhones.value, selectedSortOption.value, 'desc'));

const handleOptionSelect = (option: keyof SmartphonesSortOptionsType) => {
  selectedSortOption.value = option;
};

</script>
<template>
  <ListComponent title="Smartphones" button-text="See All Smartphones" class="smartphones-list">
    <template #actions>
      <ListDropdown
        :options="sortOptions"
        :selected="selectedSortOption"
        @select-option="handleOptionSelect"
      />
      <button class="refresh-button" type="button" @click="fetchPhones()">
        <RefreshIcon :width="14" :height="14" />
      </button>
    </template>
    <template #content>
      <SmartphoneListItem
        v-for="phone in sortedSmartphones"
        v-bind:key="phone.id"
        :smartphone="phone"
      />
    </template>
  </ListComponent>
</template>
<style scoped>
.smartphones-list {
    max-height: 350px;
}

.refresh-button {
	outline: none;
	border-radius: 4px;
  border: 1px solid #efefef;
  background-color: var(--just-white-color);
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>
