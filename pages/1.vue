<template>
  <div>
    <templates-simple v-if="decodedData" :acc="decodedData" :longSlug="acc" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
const route = useRoute();
const acc = route.query.data;
const decodedData = ref({});
decodedData.value = decodeData(acc);

// TODO: customize meta data per open house landing page

const metaTitle = "OpnHaus | Open House Landing Page";
// const metaDescription = "Open House Landing Page by OpnHaus";

useServerSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  // description: metaDescription,
  // ogDescription: metaDescription,
  // ogImage: decodeData.value.ph,
});
</script>
<style scoped></style>
