<template>
  <div class="absolute top-4 right-4 lg:hidden z-50">
    <button
      @click="scroll"
      class="flex items-center text-sm px-3 py-1 rounded-full border-solid border-2 border-slate-800 bg-white hover:bg-slate-800 hover:text-white transition-all duration-300"
    >
      <span>See Preview</span>
      <icon
        name="material-symbols:expand-circle-down-outline-rounded"
        class="h-7 w-7 ml-1"
      />
    </button>
  </div>
</template>
<script setup>
const scroll = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
</script>
