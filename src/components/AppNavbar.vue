<template>
  <header class="fixed z-50 w-full">
    <div class="z-10 bg-base-50 text-xl uppercase text-zinc-800 shadow duration-300">
      <div class="content source-sans mx-auto flex w-full items-center justify-between py-4">
        <router-link
          class="open-sans group my-auto flex items-center gap-2 font-bold text-primary-900"
          to="/"
        >
          <img
            :alt="`${$t('hero.name')}'s picture'`"
            src="@/assets/img/profile.webp"
            class="h-10 w-10 rounded-full rounded-tl-none duration-500 sm:group-hover:rounded-br-sm sm:group-hover:rounded-tl-full"
          />
          Vuefolio
        </router-link>
        <div class="flex items-center space-x-2 font-semibold">
          <nav class="hidden items-center space-x-2 md:flex [&>a]:px-1">
            <router-link class="hover:text-primary-800" to="/">{{ $t('hero.home') }}</router-link>
            <router-link class="hover:text-primary-800" to="/#experience">{{
              $t('experience.title')
            }}</router-link>
            <router-link class="hover:text-primary-800" to="/#projects">{{
              $t('projects.title')
            }}</router-link>
            <router-link class="hover:text-primary-800" to="/#about">{{
              $t('about.title')
            }}</router-link>
            <router-link class="hover:text-primary-800" to="/#contact">{{
              $t('contact.title')
            }}</router-link>
          </nav>
          <div class="source-sans text-black">
            <LanguageSelector />
          </div>
          <button class="md:hidden" @click="showMenu = !showMenu" title="open navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="showMenu" class="flex items-center">
        <nav
          class="relative z-10 flex w-full flex-col divide-y bg-white text-zinc-700 [&>a]:px-10 [&>a]:py-4"
        >
          <router-link @click="showMenu = false" class="hover:text-primary-800" to="/">{{
            $t('hero.home')
          }}</router-link>
          <router-link @click="showMenu = false" class="hover:text-primary-800" to="/#experience">{{
            $t('experience.title')
          }}</router-link>
          <router-link @click="showMenu = false" class="hover:text-primary-800" to="/#projects">{{
            $t('projects.title')
          }}</router-link>
          <router-link @click="showMenu = false" class="hover:text-primary-800" to="/#about">{{
            $t('about.title')
          }}</router-link>
          <router-link @click="showMenu = false" class="hover:text-primary-800" to="/#contact">{{
            $t('contact.title')
          }}</router-link>
        </nav>
      </div>
    </div>
    <div
      v-if="showMenu"
      @click="showMenu = false"
      class="absolute left-0 top-0 z-[-1] h-screen w-screen bg-black/50"
    ></div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
const showMenu = ref(false)
</script>
