<template>
  <section
    id="contact"
    name="contact"
    class="relative flex min-h-[100ch] w-full items-center justify-center bg-[#fff] pb-10"
  >
    <div class="custom-shape-divider-top-1713669013">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="text-[#ececec]"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <div class="content mt-10">
      <h1 class="section__title">
        {{ $t('contact.title') }}
      </h1>
      <div class="flex w-full flex-col gap-y-5">
        <p class="source-sans text-center sm:text-lg">
          {{ $t('contact.description') }}
        </p>
        <span class="h-1 w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <span class="text-center">
          <p class="source-sans text-center sm:text-lg">
            {{ $t('contact.social') }}
          </p>
          <div class="flex w-full flex-wrap items-center justify-center gap-5 pt-3">
            <div class="flex items-center">
              <input
                type="email"
                class="pointer-events-none min-h-[45px] w-[200px] select-all rounded-s-md border-[1px] bg-gray-50 px-3"
                id="Email"
                name="Email"
                :placeholder="$t('contact.email')"
                autocomplete="off"
                :value="$t('contact.email')"
                readonly
              />
              <button
                class="flex min-h-[45px] min-w-[85px] select-none items-center justify-center rounded-e-md border-none px-2 text-sm text-white transition-colors duration-300 ease-in-out"
                @click="copyEmail"
                :disabled="copied"
                :title="$t('contact.copy')"
                :class="
                  copied
                    ? 'cursor-default bg-neutral-600'
                    : 'cursor-pointer bg-primary-800 hover:bg-primary-900 '
                "
              >
                <span
                  v-if="!copied"
                  class="source-sans flex items-center gap-x-1 text-sm sm:text-base"
                >
                  <CopyIcon class="h-4 w-4" />
                  {{ $t('contact.copy') }}
                </span>
                <span
                  v-else
                  class="contact@ralo.dev source-sans flex items-center gap-x-1 text-base"
                >
                  <svg
                    class="my-auto h-4 w-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>
                  {{ $t('contact.copied') }}
                </span>
              </button>
            </div>
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
        </span>
        <span class="h-1 w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <div class="flex w-full flex-col justify-center text-center">
          <p class="source-sans text-center sm:text-lg">
            {{ $t('contact.form') }}
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import CopyIcon from '@/components/icons/CopyIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import ContactForm from './ContactForm.vue'
import { ref } from 'vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'

const email = 'contact@ralo.dev'
const copied = ref(false)

function copyEmail() {
  if (copied.value) return
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.custom-shape-divider-top-1713669013 {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1713669013 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 72px;
}
</style>
