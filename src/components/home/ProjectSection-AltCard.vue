<template>
  <article class="h-full w-full rounded-xl border bg-white p-5 shadow-md">
    <div class="flex h-full flex-col justify-evenly gap-1 font-medium">
      <h2 class="text-ltext1 text-xl font-semibold md:text-2xl">
        {{ name }}
      </h2>
      <div class="my-1 flex flex-wrap gap-2">
        <span
          v-for="tag in techstack"
          :key="tag.toLowerCase()"
          class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-base-200 px-2 py-1 text-xs font-normal"
        >
          {{ tag }}
        </span>
      </div>
      <label>
        <span class="sr-only">Project description</span>
        <textarea
          role="textbox"
          :value="description"
          aria-readonly="true"
          class="text-ltext2 h-20 w-full resize-none text-sm font-normal focus:outline-none focus:ring-0 sm:h-28 md:text-base"
          readonly
        />
      </label>
      <div class="flex justify-end space-x-2">
        <a v-if="src != ''" :href="src" target="_blank" ref="noreferrer noopener">
          <GlassButton bg="bg-gray-600" size="small">
            <template #icon>
              <GithubIcon class="h-6 w-6"></GithubIcon>
            </template>
            {{ $t('projects.source') }}
          </GlassButton>
        </a>
        <a v-if="src != ''" :href="src" target="_blank" ref="noreferrer noopener">
          <GlassButton bg="bg-primary-600" size="small">
            <template #icon>
              <WebIcon class="h-6 w-6"></WebIcon>
            </template>
            {{ $t('projects.website') }}
          </GlassButton>
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import WebIcon from '../icons/WebIcon.vue'

defineProps({
  name: {
    type: String,
    default: 'Project name'
  },
  description: {
    type: String,
    default: 'Project description'
  },
  src: {
    type: String,
    default: '#'
  },
  techstack: {
    type: Array<String>
  }
})
</script>
