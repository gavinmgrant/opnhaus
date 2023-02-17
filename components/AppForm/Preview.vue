<template>
  <div class="h-screen w-screen lg:w-auto flex justify-center items-center">
    <div
      class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden"
    >
      <templates-simple :acc="data" :state="state" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
