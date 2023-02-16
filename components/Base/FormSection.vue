<template>
  <div class="lg:grid lg:grid-cols-3 lg:gap-6">
    <div class="lg:col-span-1">
      <div class="px-4 sm:px-0 sticky top-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          {{ description }}
        </p>
        <slot name="helpertext" />
        <slot name="toggle" />
      </div>
    </div>
    <div class="mt-5 lg:col-span-2 lg:mt-0 relative">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
