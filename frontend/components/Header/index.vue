<script setup lang="ts">
import { PAGES } from '@/classes/constants/pages'
const route = useRoute()
const activeTab = ref(PAGES[route.name])
</script>
<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <IconLogo />
      </div>
      <div class="header__right">
        <div class="header__tabs">
          <v-tabs v-model="activeTab" direction="horizontal">
            <span
              v-for="(tab, index) in PAGES"
              :key="index"
              class="header__link"
            >
              <v-tab :to="tab.href" class="header__tab">{{ tab.title }}</v-tab>
            </span>
          </v-tabs>
        </div>
        <div class="header__search">
          <v-text-field
            class="header__input"
            :loading="false"
            prepend-inner-icon="mdi-magnify"
            :density="'comfortable'"
            label="Search"
            variant="solo"
            hide-details
            single-line
            clearable
            rounded
          ></v-text-field>
        </div>
        <div class="header__subscribe">
          <v-btn theme="dark">Subscribe</v-btn>
        </div>
      </div>
    </div>
  </header>
</template>
