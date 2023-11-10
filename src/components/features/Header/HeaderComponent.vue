<script setup lang="ts">
import avatar from '@/assets/avatar.png';
import SearchComponent from '@/components/shared/SearchComponent.vue';
import BurgerMenuIcon from '@/components/shared/icons/BurgerMenuIcon.vue';
import ChatIcon from '@/components/shared/icons/ChatIcon.vue';
import NotificationsIcon from '@/components/shared/icons/NotificationsIcon.vue';
import type { UserProperties } from './UserActions.vue';
import UserActionsVue from './UserActions.vue';

const userProperties: UserProperties = {
  image: avatar,
  fullName: 'Admirra John',
};

</script>
<template>
  <div class="header-wrapper">
    <div class="left-container">
      <BurgerMenuIcon class="burger-icon icon-btn" />
      <SearchComponent />
    </div>
    <div class="right-container">
      <NotificationsIcon class="icon-btn" />
      <ChatIcon class="icon-btn" />
      <UserActionsVue :user="userProperties" />
    </div>
  </div>
</template>
<style scoped>
.header-wrapper {
    display: flex;
    padding: 9px 20px;
    justify-content: space-between;
    border-bottom: 1px solid var(--divider-color);
    background-color: var(--just-white-color);
}

.left-container {
    display: flex;
    gap: 16px;
    align-items: center;
}

.search-container {
    display: none;
}

.right-container {
    display: flex;
    gap: 16px;
    align-items: center;
}

.search-input {
    max-width: 245px;
}

.icon-btn:hover {
    cursor: pointer;
    color: var(--main-color-lighten);
}

@media (min-width: 768px) {
    .header-wrapper {
        padding: 9px 20px 9px 13px;
    }
}

@media (min-width: 1200px) {
    .header-wrapper {
        padding: 20px 50px;
    }

    .burger-icon {
        display: none;
    }

    .search-input {
        max-width: 343px;
    }
}
</style>
