<script setup lang="ts">
import DashboardIcon from '@/components/shared/icons/DashboardIcon.vue';
import DepartmentIcon from '@/components/shared/icons/DepartmentIcon.vue';
import EmployeeIcon from '@/components/shared/icons/EmployeeIcon.vue';
import RecruitmentIcon from '@/components/shared/icons/RecruitmentIcon.vue';
import ScheduleIcon from '@/components/shared/icons/ScheduleIcon.vue';
import SettingsIcon from '@/components/shared/icons/SettingsIcon.vue';
import SupportIcon from '@/components/shared/icons/SupportIcon.vue';
import type { Component } from 'vue';

export interface NavItem {
  title: string
  icon: Component
  active?: boolean
}

export interface NavItemGroup {
  title: string
  items: NavItem[]
}

const sidebar: NavItemGroup[] = [
  {
    title: 'Main Menu',
    items: [
      {
        title: 'Dashboard',
        icon: DashboardIcon,
        active: true,
      },
      {
        title: 'Recruitment',
        icon: RecruitmentIcon,
      },
      {
        title: 'Schedule',
        icon: ScheduleIcon,
      },
      {
        title: 'Employee',
        icon: EmployeeIcon,
      },
      {
        title: 'Department',
        icon: DepartmentIcon,
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        title: 'Support',
        icon: SupportIcon,
      },
      {
        title: 'Settings',
        icon: SettingsIcon,
      },
    ],
  },
];
</script>
<template>
  <div class="sidebar">
    <div class="title-container">
      <h1 class="title">WeHR</h1>
    </div>
    <nav class="nav" v-for="item in sidebar" v-bind:key="item.title">
      <h3 class="nav-title">{{ item.title }}</h3>
      <ul class="nav-link" v-for="link in item.items" v-bind:key="link.title">
        <a :class="{ active: link.active }">
          <component :is="link.icon" />
          <h4 class="nav-link-title">{{ link.title }}</h4>
        </a>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.sidebar {
    display: none;
    padding: 20px 0;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: var(--background-color);
    flex-direction: column;
    gap: 39px;
    flex-shrink: 0;
    border-right: var(--border-style);
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    color: var(--sidebar-title-color);
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
}

.nav {
    display: flex;
    flex-direction: column;
}

.nav-title {
    color: var(--secondary-subtitle-color);
    font-family: var(--secondary-font);
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.5;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
}

.nav-link {
    display: flex;
    padding: 16px 30px;
    align-items: center;
    text-align: center;
    color: var(--secondary-subtitle-color);
}

.nav-link a {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 24px;
}

.nav-link:hover {
    background-color: var(--sidebar-link-hover-background-color);
    color: var(--main-color-lighten);
    cursor: pointer;
}

.nav-link:hover svg {
    color: var(--main-color-lighten);
    cursor: pointer;
}

.active,
.active svg {
    color: var(--main-color);
}

@media (min-width: 768px) {
    .sidebar {
        display: flex;
    }

    .nav-link-title {
        display: none;
    }

    .title {
        font-size: 20px;
    }

    .nav-title {
        text-align: center;
        padding-left: 0px;
        font-size: 10px;
    }

    .nav-link {
        justify-content: center;
    }
}

@media (min-width: 1200px) {
    .sidebar {
        padding: 20px 0;
        width: var(--sidebar-width-lg);
    }

    .nav-link-title {
        display: inline;
    }

    .nav-title {
        text-align: left;
        padding-left: 30px;
    }

    .nav-link {
        justify-content: left;
    }

    .title {
        font-size: 36px;
    }
}
</style>
