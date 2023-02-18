<template>
  <div class="h-screen w-screen lg:w-auto flex justify-center items-center">
    <div
      class="h-[750px] w-[350px] overflow-y-auto rounded-[2.5rem] ring-8 ring-slate-800 overflow-hidden"
    >
      <templates-simple :acc="data" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
