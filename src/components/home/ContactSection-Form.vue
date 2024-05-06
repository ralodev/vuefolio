<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GlassButton from '@/components/GlassButton.vue'
// Get your key for free in: https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY'
const name = ref('')
const email = ref('')
const message = ref('')
const sending = ref(false)
const isMessageAvailable = ref(true)
const cooldownTimeLeft = ref('00:00')

onMounted(() => {
  checkMessageAvailable()
})

const checkMessageAvailable = () => {
  let lastMessage = localStorage.getItem('lastMessage')
  if (lastMessage) {
    let lastMessageTime = new Date(lastMessage)
    let currentTime = new Date()
    let difference = currentTime.getTime() - lastMessageTime.getTime()
    let differenceInMinutes = difference / 60000
    if (differenceInMinutes < 30) {
      let minutes = 30 - Math.floor(differenceInMinutes)
      let seconds = 59 - Math.floor((difference % (1000 * 60)) / 1000)
      cooldownTimeLeft.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
      setTimeout(() => {
        checkMessageAvailable()
      }, 1000)
      isMessageAvailable.value = false
      return false
    }
  }
  isMessageAvailable.value = true
  return true
}

const submitForm = async () => {
  if (!checkMessageAvailable()) {
    console.error("You can't send more messages")
    return
  }
  sending.value = true
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value
    })
  })
  const result = await response.json()
  if (result.success) {
    console.log(result)
  }
  let currentDateTime = new Date(Date.now()).toISOString()
  localStorage.setItem('lastMessage', currentDateTime)
  checkMessageAvailable()
}
</script>
<template>
  <form
    @submit.prevent="submitForm"
    class="open-sans flex w-full max-w-[600px] flex-col gap-y-5 self-center pt-3 text-start"
  >
    <label class="block" for="name">
      {{ $t('contact.name_label') }}
      <input
        type="text"
        name="name"
        v-model="name"
        autocomplete="name"
        :placeholder="$t('contact.name_placeholder')"
        class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
        required
      />
    </label>
    <label class="block" for="email">
      {{ $t('contact.email_label') }}
      <input
        type="email"
        name="email"
        v-model="email"
        autocomplete="email"
        :placeholder="$t('contact.email_placeholder')"
        class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
        required
      />
    </label>
    <label class="block" for="message">
      {{ $t('contact.message_label') }}
      <textarea
        name="message"
        v-model="message"
        class="block min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] border-neutral-400 bg-white px-3 py-2 outline-0 focus:outline-1 focus:outline-primary-700"
        :placeholder="$t('contact.message_placeholder')"
        required
      ></textarea>
    </label>

    <span v-if="!isMessageAvailable" class="source-sans text-center text-sm text-red-600">
      {{ $t('contact.restriction') }}
    </span>

    <span class="mx-auto">
      <GlassButton :disabled="sending || !isMessageAvailable" type="submit" title="Send message">
        <span v-if="isMessageAvailable" class="px-3">
          {{ sending ? $t('contact.sending') : $t('contact.send') }}
        </span>
        <span v-else class="px-3">
          {{ cooldownTimeLeft }}
        </span>
      </GlassButton>
    </span>
  </form>
</template>
