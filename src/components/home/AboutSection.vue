<template>
  <section
    id="about"
    name="about"
    class="relative flex min-h-[80ch] w-full justify-center bg-base-50"
  >
    <div class="custom-shape-divider-top-1714950289">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="section-background-color bg-transparent"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <article class="section-background-color mt-[80px] w-full pb-10">
      <div class="content text-black">
        <h1 class="section__title relative">
          {{ $t('about.title') }}
        </h1>
        <div class="mb-10 mt-10 inline-block items-center text-center sm:mt-0">
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
    </article>
  </section>
</template>

<script lang="ts" setup>
import EducationPanel from './AboutSection-Education.vue'
import AchievementsPanel from './AboutSection-Achievements.vue'
</script>

<style scoped>
.custom-shape-divider-top-1714950289 {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 -5px 3px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1714950289 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

@media (max-width: 800px) {
  .custom-shape-divider-top-1714950289 svg {
    width: 800px;
    height: auto;
  }
  .custom-shape-divider-top-1713495835 svg {
    width: 800px;
    height: auto;
  }
}
</style>
