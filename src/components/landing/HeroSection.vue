<template>
  <section class="home-hero flex w-full items-center justify-center">
    <div class="content space-y-8 text-center">
      <h1
        class="source-sans text-balance text-4xl font-black uppercase tracking-wide sm:text-5xl md:text-6xl"
      >
        {{ $t('hero.title') }}
      </h1>
      <p class="open-sans max-w-[80ch] text-pretty text-base sm:text-lg md:text-xl">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="flex justify-center gap-x-3">
        <RouterLink to="#contact">
          <GlassButton title="Contact">
            <span class="px-2"> {{ $t('hero.contact_button') }} </span>
          </GlassButton>
        </RouterLink>
      </div>
      <div class="flex justify-center gap-x-3">
        <a
          v-if="$t('hero.profiles.github') != ''"
          :href="$t('hero.profiles.github')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-neutral-700" title="GitHub profile">
            <template #icon>
              <GithubIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
        <a
          v-if="$t('hero.profiles.linkedin') != ''"
          :href="$t('hero.profiles.linkedin')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-sky-700" title="LinkedIn profile">
            <template #icon>
              <LinkedinIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
        <a
          v-if="$t('hero.profiles.youtube') != ''"
          :href="$t('hero.profiles.youtube')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-red-700" title="Youtube channel">
            <template #icon>
              <YoutubeIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
        <a
          v-if="$t('hero.profiles.twitter') != ''"
          :href="$t('hero.profiles.twitter')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-slate-800" title="Twitter profile">
            <template #icon>
              <TwitterIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
        <a
          v-if="$t('hero.profiles.instagram') != ''"
          :href="$t('hero.profiles.instagram')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-rose-700" title="Instagram profile">
            <template #icon>
              <InstagramIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
        <a
          v-if="$t('hero.profiles.facebook') != ''"
          :href="$t('hero.profiles.facebook')"
          target="_blank"
          rel="noopener"
        >
          <GlassButton size="small" bg="bg-blue-800" title="Facebook profile">
            <template #icon>
              <FacebookIcon class="h-6 w-6" />
            </template>
          </GlassButton>
        </a>
      </div>
    </div>
    <!-- Icon Scroll Credits: http://www.hnslack.xyz/ -->
    <div class="icon-scroll hidden md:block"></div>
    <div class="custom-shape-divider-bottom-1713476723">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '../GlassButton.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
import { RouterLink } from 'vue-router'
import YoutubeIcon from '../icons/YoutubeIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import FacebookIcon from '../icons/FacebookIcon.vue'
</script>

<style>
.home-hero {
  background: linear-gradient(to bottom, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),
    url('@/assets/common-bg.svg');
  background-position: center;
  height: 100vh;
  min-height: 80ch;
  max-height: 120ch;
  position: relative;
}
.custom-shape-divider-bottom-1713476723 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1713476723 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1713476723 .shape-fill {
  fill: #ececec;
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 27px;
  height: 45px;
  margin-left: -14px;
  bottom: 10px;
  margin-top: -35px;
  border: 2px solid #000;
  opacity: 50%;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #000;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(26px);
  }
}
</style>
