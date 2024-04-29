<template>
  <section
    id="about"
    name="about"
    class="flex min-h-[80ch] w-full items-center justify-center bg-[#ececec] py-10"
  >
    <div class="content">
      <h1 class="section__title">
        {{ $t('about.title') }}
      </h1>
      <div class="mb-10 mt-10 inline-block text-center sm:mt-0">
        <div name="photo-frame" class="group relative mb-8 inline-block md:mb-0 md:block">
          <img
            src="@/assets/img/profile.webp"
            class="relative z-[1] float-left mx-8 mb-2 h-56 w-56 rotate-6 rounded-lg border-gray-400 duration-300 md:group-hover:rotate-0"
            alt=""
          />
          <div
            class="absolute h-[244px] w-[244px] translate-x-[22px] translate-y-[-10px] rotate-6 rounded-lg bg-white shadow-xl shadow-primary-800/10 duration-300 md:group-hover:rotate-0"
          ></div>
        </div>
        <p class="open-sans text-start text-base sm:text-lg">
          {{ $t('about.summary') }}
        </p>
      </div>
      <EducationPanel />
      <AchievementsPanel />
    </div>
  </section>
</template>

<script lang="ts" setup>
import EducationPanel from './EducationPanel.vue'
import AchievementsPanel from './AchievementsPanel.vue'
</script>

<style scoped>
section {
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.6));
}
</style>
