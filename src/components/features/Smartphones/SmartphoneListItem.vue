<script setup lang="ts">
import ListItem from '@/components/shared/List/ListItem.vue';

import { type Smartphone } from '@/types/smartphone';

defineProps<{
  smartphone: Smartphone
}>();
</script>

<template>
  <ListItem>
    <template #content>
      <h4>
        {{ smartphone.title }}
      </h4>
      <p class="description">{{ smartphone.description }}</p>
    </template>
    <template #action>
      <div class="info">
        <div class="price">{{ smartphone.price }} &#x20AC;</div>
        <div class="rating">{{ smartphone.rating }} &#9733;</div>
      </div>
    </template>
  </ListItem>
</template>

<style scoped>
.description {
    overflow: hidden;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--primary-subtitle-color);
}

.info {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
}

.price {
    font-weight: 500;
    line-height: 28px;
    font-family: var(--main-font);
    font-size: 18px;
}

.rating {
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    justify-self: end;
    color: var(--primary-subtitle-color);
}
</style>
