<template>
  <div class="w-full flex justify-end">
    <div class="flex flex-row justify-between toggle">
      <div class="flex items-center cursor-pointer">
        <label
          for="toggle"
          class="mr-3 dark:text-white text-gray-700 font-medium text-sm"
        >
          {{ text }}
        </label>
        <div class="relative">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="checkbox hidden"
            :checked="toggleOn"
          />
          <div
            class="block border-[1px] dark:border-white border-gray-700 w-12 h-7 rounded-full"
          ></div>
          <div
            class="dot absolute left-1 top-1 dark:bg-white bg-gray-700 w-5 h-5 rounded-full transition"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["text", "toggleOn"]);
</script>
<style>
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>
