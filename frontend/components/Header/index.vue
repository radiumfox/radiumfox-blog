<script setup lang="ts">
const route = useRoute()

const ROUTES = {
  INDEX: 'index',
  POSTS: 'posts',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const

const tabs = {
  [ROUTES.INDEX]: {
    id: 1,
    name: ROUTES.INDEX,
    title: 'Home',
    href: '/',
  },
  [ROUTES.POSTS]: {
    id: 2,
    name: ROUTES.POSTS,
    title: 'Posts',
    href: '/posts',
  },
  [ROUTES.ABOUT]: {
    id: 3,
    name: ROUTES.ABOUT,
    title: 'About',
    href: '/about',
  },
  [ROUTES.CONTACT]: {
    id: 4,
    name: ROUTES.CONTACT,
    title: 'Contact',
    href: '/contact',
  },
}

const activeTab = ref(tabs[route.name])
</script>
<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <HeaderLogo />
      </div>
      <div class="header__right">
        <div class="header__tabs">
          <v-tabs v-model="activeTab" direction="horizontal">
            <span
              v-for="(tab, index) in tabs"
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
            label="Search post"
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
  </div>
</template>
