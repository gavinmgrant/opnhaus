<template>
  <div class="absolute right-6 mt-2">
    <div class="flex flex-row justify-between">
      <div class="flex items-center">
        <label for="toggle" class="mr-3 text-gray-700 font-medium text-sm">
          {{ text }}
        </label>
        <div class="relative cursor-pointer">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="checkbox hidden"
            :checked="toggleOn"
          />
          <div
            class="dotbackground block border-[1px] border-gray-700 w-12 h-7 rounded-full"
          ></div>
          <div
            class="dot absolute left-1 top-1 bg-gray-700 w-5 h-5 rounded-full transition"
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
  background-color: #fff;
}
input:checked ~ .dotbackground {
  background-color: #374151;
}
</style>
