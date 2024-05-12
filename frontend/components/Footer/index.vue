<script setup lang="ts">
import { PAGES } from '@/classes/constants/pages'
const email = 'eteone.longa@gmail.com'
const tg = 'https://t.me/eteonee'
</script>
<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__left">
        <div class="footer__copyright">Copyright 2024</div>
      </div>
      <div class="footer__right">
        <div class="footer__links">
          <p class="footer__subtitle">Pages</p>
          <ul class="footer__list">
            <li
              v-for="(page, index) in PAGES"
              :key="index"
              class="footer__item"
            >
              <a class="footer__link" :href="page.href">{{ page.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__links">
          <p class="footer__subtitle">Contacts</p>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" :href="`mailto:${email}`">Email</a>
            </li>
            <li class="footer__item">
              <a class="footer__link" :href="tg">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
