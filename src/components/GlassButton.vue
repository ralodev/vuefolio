<template>
  <button
    :disabled="props.disabled"
    class="glass-button source-sans"
    :class="getButtonSize"
    :title="props.title"
  >
    <span
      class="glass-button__content text-white"
      :class="getButtonSpacing"
      :style="`padding-inline: ${props.padding}px !important`"
    >
      <span v-if="!!slots['icon']" class="flex [&>svg]:my-auto [&>svg]:inline">
        <slot name="icon" />
      </span>
      <span v-if="!!slots['default']" class="m-auto">
        <slot name="default" />
      </span>
    </span>
    <span class="glass-button__bg" :class="bgClass + (props.disabled ? ' opacity-50' : '')"></span>
  </button>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
const slots = useSlots()
const button_sizes: Record<string, string> = {
  small: ' h-[42px] min-w-[35px] text-sm',
  normal: ' h-[50px] min-w-[35px] text-lg',
  large: ' h-[65px] min-w-[35px] text-2xl font-semibold'
}
const button_spacing: Record<string, string> = {
  small: ' px-1 gap-x-1',
  normal: ' px-2 gap-x-2',
  large: ' px-5 gap-x-3'
}
const props = defineProps({
  bg: {
    type: String,
    default: 'bg-primary-700'
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal',
    required: false
  },
  padding: {
    type: String,
    default: '8'
  }
})

const getButtonSize = computed(() => {
  const isValidSize = Object.keys(button_sizes).includes(props.size)
  const newClass = isValidSize ? button_sizes[props.size] : button_sizes['normal']
  return newClass
})
const getButtonSpacing = computed(() => {
  const isValidSpacing = Object.keys(button_spacing).includes(props.size)
  const newClass = isValidSpacing ? button_spacing[props.size] : button_spacing['normal']
  return newClass
})
const bgClass = computed(() => {
  return props.bg.includes('bg-') ? props.bg : 'bg-' + props.bg
})
</script>

<style scoped>
.glass-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  border-radius: 6px;
  z-index: 1;
  transition: all 0.3s;
}

.glass-button:not([disabled]) {
  cursor: pointer;
}

.glass-button:is([disabled]) {
  cursor: not-allowed;
}

.glass-button__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.5px;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.glass-button:disabled {
  cursor: default;
}

.glass-button .glass-button__bg {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.glass-button:not([disabled]):hover .glass-button__bg {
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 5px 0px #0000003a;
}

.glass-button:not([disabled]):hover .glass-button__content {
  background-color: #00000017;
  backdrop-filter: blur(4px);
}
</style>
