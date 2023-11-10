<script setup lang="ts">
import ArrowDownIcon from '@/components/shared/icons/ArrowDownIcon.vue';
import { ref } from 'vue';

const props = defineProps<{
  options?: string[];
  selected?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['selectOption']);

const isDropdownOpen = ref<boolean>(false);

const toggleDropdown = () => {
  if (props.disabled || !props.options?.length) {
    return;
  }
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleOptionSelect = (option: string) => {
  emit('selectOption', option);
  toggleDropdown();
};
</script>
<template>
  <div class="list-dropdown-container">
    <div class="list-dropdown-selected-option" @click="toggleDropdown" @keydown="toggleDropdown">
      {{ selected }}
      <div class="arrow-icon" v-bind:class="{ active: isDropdownOpen }">
        <ArrowDownIcon :width="18" :height="18" />
      </div>
    </div>
    <ul v-if="isDropdownOpen" class="list-dropdown-options">
      <li class="list-dropdown-item" v-for="option in options" :key="option" @click="handleOptionSelect(option)" @keydown="handleOptionSelect(option)">{{ option }}</li>
    </ul>
  </div>
</template>
<style scoped>
.option {
    font-family: var(--secondary-font);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}

.list-dropdown-container {
    z-index: 1;
    position: relative;
}

.list-dropdown-options,
.list-dropdown-selected-option {
    font-family: var(--secondary-font);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: var(--secondary-subtitle-color);

    border-radius: 4px;
    border: 1px solid #efefef;
    background-color: var(--just-white-color);
}

.list-dropdown-options {
    background-color: white;
    padding: 4px 6px;
    position: absolute;
    list-style: none;
    width: 100%;
}

.list-dropdown-selected-option {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: 8px;
    padding: 0px 6px;
    text-transform: capitalize;
    cursor: pointer;
}

.list-dropdown-item {
    padding-top: 4px;
    cursor: pointer;
    text-transform: capitalize;
}

.arrow-icon {
    display: flex;
}

.arrow-icon.active {
    rotate: 180deg;
}
</style>
