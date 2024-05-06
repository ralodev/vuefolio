<template>
  <section
    id="contact"
    name="contact"
    class="relative flex min-h-[100ch] w-full items-center justify-center bg-[#fff] pb-10"
  >
    <div class="custom-shape-divider-top-1714946600">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -10 1200 130"
        preserveAspectRatio="none"
        class="section-background-color bg-transparent"
      >
        <path
          d="M321.39,66.44c58-10.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45,0.39C823.78,31,906.67,82,985.66,102.83c70.05,18.48,146.53,26.09,214.34,5V-10H0V47.35A600.21,600.21,0,0,0,321.39,66.44Z"
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
          <div class="flex w-full flex-wrap items-center justify-center gap-2 pt-3">
            <div class="flex items-center">
              <input
                type="email"
                class="min-h-[45px] w-[200px] select-all rounded-s-md border-[1px] bg-gray-50 px-3 focus:outline-none"
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
import ContactForm from './ContactSection-Form.vue'
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
.custom-shape-divider-top-1714946600 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1714946600 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

@media (max-width: 800px) {
  .custom-shape-divider-top-1714946600 svg {
    width: 800px;
    height: auto;
  }
}
</style>
