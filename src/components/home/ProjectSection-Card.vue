<template>
  <article class="relative w-full rounded-xl border bg-white py-6 shadow-md">
    <div class="relative flex flex-col gap-2 font-medium md:flex-row">
      <div class="order-2 flex w-full flex-col justify-center gap-y-2 px-6 py-3 md:w-1/2 md:px-2">
        <h2
          class="open-sans text-ltext1 text-center text-2xl font-bold text-slate-700 sm:text-start sm:text-4xl"
        >
          {{ name }}
        </h2>
        <div
          class="source-sans my-2 flex flex-wrap justify-center gap-2 font-medium sm:justify-start"
        >
          <span
            v-for="tech in techstack"
            :key="tech.toLowerCase()"
            class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-base-200 px-2 py-1 text-xs font-normal sm:text-sm"
          >
            {{ tech }}
          </span>
        </div>
        <p class="text-ltext2 open-sans text-justify text-base sm:text-start">
          {{ description }}
        </p>
        <div class="flex justify-center gap-5 pt-3 sm:justify-start">
          <a
            v-if="src"
            :title="`${props.name} github repository`"
            :href="src"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GlassButton
              :title="`${props.name} github repository`"
              type="button"
              bg="bg-slate-600"
              padding="16"
            >
              <template #icon>
                <GithubIcon class="h-6 w-6" />
              </template>
              {{ $t('projects.source') }}
            </GlassButton>
          </a>
          <a v-if="url != ''" :href="url" target="_blank" rel="noreferrer noopener">
            <GlassButton v-if="url" :disabled="!url" padding="16" :title="`${props.name} website`">
              <template #icon>
                <WebIcon class="h-6 w-6" />
              </template>
              {{ $t('projects.website') }}
            </GlassButton>
          </a>
        </div>
      </div>
      <div class="group mx-auto max-w-[90vw] px-6 md:w-1/2 md:px-0">
        <div class="container">
          <div class="tilt-box-wrap">
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <div class="tilt-box">
              <img
                :src="getImageUrl()"
                :alt="name + ' main image'"
                class="mx-auto object-cover object-center sm:max-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import WebIcon from '@/components/icons/WebIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Project name'
  },
  description: {
    type: String,
    default: 'Project description'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  url: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  read: {
    type: Boolean,
    required: false
  },
  techstack: {
    type: Array<String>,
    required: false
  }
})

const getImageUrl = () => {
  return new URL(`../../assets/img/projects/${props.image}`, import.meta.url).href
}
</script>

<style scoped>
.tilt-box-wrap {
  position: relative;
  transition: all 0.6s ease-out;
  perspective: 1000px;
}
.tilt-box-wrap:hover {
  transition: all 0.3s linear;
  perspective: 1000px;
}
.tilt-box {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
}
.t_over {
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
}
.t_over:nth-child(1) {
  left: 0;
  top: 0;
}
.t_over:nth-child(2) {
  left: 33.333%;
  top: 0;
}
.t_over:nth-child(3) {
  left: 66.666%;
  top: 0;
}
.t_over:nth-child(4) {
  left: 0;
  top: 33.333%;
}
.t_over:nth-child(5) {
  left: 33.333%;
  top: 33.333%;
}
.t_over:nth-child(6) {
  left: 66.666%;
  top: 33.333%;
}
.t_over:nth-child(7) {
  left: 0;
  top: 66.666%;
}
.t_over:nth-child(8) {
  left: 33.333%;
  top: 66.666%;
}
.t_over:nth-child(9) {
  left: 66.666%;
  top: 66.666%;
}

.t_over:nth-child(1):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(10deg);
}
.t_over:nth-child(2):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(0deg);
}
.t_over:nth-child(3):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(-10deg);
}
.t_over:nth-child(4):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(10deg);
}
.t_over:nth-child(5):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(0deg);
}
.t_over:nth-child(6):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(-10deg);
}
.t_over:nth-child(7):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(10deg);
}
.t_over:nth-child(8):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(0deg);
}
.t_over:nth-child(9):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(-10deg);
}
</style>
