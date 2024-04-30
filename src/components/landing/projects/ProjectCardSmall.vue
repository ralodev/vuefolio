<template>
  <article class="h-full w-full rounded-xl border-2 p-5 shadow-lg">
    <div class="flex h-full flex-col justify-evenly gap-2 font-medium">
      <h2 class="text-ltext1 text-xl font-semibold md:text-2xl">
        {{ props.name }}
      </h2>
      <p class="text-ltext2 text-sm md:text-base">
        {{ description.length > 150 ? description.substring(0, 150) + '...' : description }}
      </p>
      <div class="my-2 flex flex-wrap gap-2 font-medium">
        <div
          v-for="tag in props.techstack"
          :key="tag.toLowerCase()"
          class="bg-base-200 relative flex flex-nowrap whitespace-nowrap rounded-md px-2 py-1 text-xs font-normal"
        >
          {{ tag }}
        </div>
      </div>
      <div class="flex justify-end">
        <a v-if="src != ''" :href="src" target="_blank" ref="noreferrer noopener">
          <GlassButton @click="emits('open-src')" bg="bg-gray-600" size="small">
            <template #icon>
              <GithubIcon class="h-6 w-6"></GithubIcon>
            </template>
            Source code
          </GlassButton>
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const emits = defineEmits(['open-src', 'open-demo', 'open-live', 'open-read'])

const props = defineProps({
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
