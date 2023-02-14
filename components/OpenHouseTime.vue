<template>
  <li>
    <div v-if="date && timeRange">
      <dt
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"
        >
          <icon name="ph:calendar-check-duotone" class="h-5 w-5" />
        </div>
        <div class="w-full flex min-w-0">
          <p class="font-medium text-sm leading-6 text-gray-900">
            {{ date }}
          </p>
          <p class="font-medium text-sm leading-6 text-gray-900 ml-3">
            {{ timeRange }}
          </p>
        </div>
      </dt>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  timeRange: {
    type: String,
    required: true,
  },
});
</script>
