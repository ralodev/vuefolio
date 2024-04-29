<template>
  <div class="panel rounded-2xl border-2">
    <div
      class="sticky top-[70px] z-[2] flex cursor-pointer rounded-t-2xl border-b-2 bg-gray-50 px-2 py-2 transition-all duration-1000 sm:top-16"
      :class="collapsed ? 'rounded-b-2xl border-transparent delay-500' : ' rounded-b-none delay-0'"
      @click="toggle"
    >
      <slot name="icon"></slot>
      <span v-if="header" class="source-sans my-auto text-xl font-semibold sm:text-2xl">{{
        header
      }}</span>

      <button
        v-if="toggleable"
        title="Expand or collapse panel"
        type="button"
        class="panel-toggler my-auto ml-auto h-6 w-6 self-end rounded-full border-2 border-black border-opacity-50"
      >
        <svg
          v-if="!collapsed"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </div>
    <div
      ref="content"
      class="overflow-hidden rounded-b-2xl bg-white transition-all duration-500 ease-in-out"
      :style="{ maxHeight: maxHeight.valueOf() }"
    >
      <div class="p-3 px-5 pb-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  header: {
    type: String,
    default: '',
    required: false
  },
  toggleable: {
    type: Boolean,
    default: true
  },
  collapsed: {
    type: Boolean,
    default: true
  }
})

const collapsed = ref(props.collapsed)
const maxHeight = ref<string>('0')
const content = ref<HTMLElement | null>(null)

const calculateMaxHeight = () => {
  return content.value?.scrollHeight + 'px'
}

const toggle = () => {
  collapsed.value = !collapsed.value
  maxHeight.value = collapsed.value ? '0' : calculateMaxHeight()
}

watch(
  () => props.collapsed,
  (newValue) => {
    collapsed.value = newValue
    maxHeight.value = collapsed.value ? '0' : calculateMaxHeight()
  }
)

onMounted(() => {
  maxHeight.value = collapsed.value ? '0' : calculateMaxHeight()
})
</script>

<style></style>
