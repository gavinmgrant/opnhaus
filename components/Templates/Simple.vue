<template>
  <main class="p-4 bg-white h-full w-full pt-6 max-w-lg mx-auto text-slate-800">
    <h1
      v-if="acc.propertyPhoto"
      class="text-center text-2xl font-semibold mb-2"
    >
      Open House
    </h1>
    <div v-if="acc.propertyPhoto" class="w-full mb-2">
      <img
        :src="acc.propertyPhoto"
        alt="Property photo"
        class="h-full w-full object-cover rounded-lg"
      />
    </div>
    <h1 v-if="acc.address" class="text-center text-md font-medium mb-2">
      {{ acc.address }}
    </h1>
    <div
      v-if="acc.beds && acc.baths"
      class="flex items-center justify-center mb-4 text-md font-medium"
    >
      <icon name="material-symbols:bedroom-child" class="h-6 w-6" /><span
        class="ml-1"
        >{{ acc.beds }} bed</span
      >
      <icon name="material-symbols:bathroom" class="h-6 w-6 ml-4" /><span
        class="ml-1"
        >{{ acc.baths }} bath</span
      >
    </div>
    <h1
      v-if="acc.times.length > 0"
      class="text-center text-2xl font-semibold mt-8 mb-3"
    >
      When
    </h1>
    <ul class="space-y-2">
      <open-house-time
        v-for="(time, id) in acc.times"
        :key="id"
        :date="time.date"
        :startTime="time.startTime"
        :endTime="time.endTime"
        :address="acc.address"
        :name="acc.name"
      />
    </ul>
    <div class="flex items-center justify-center mt-12">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden flex-none"
      >
        <img :src="acc.i" alt="Agent name" class="h-full w-full object-cover" />
      </div>
      <div class="m-4 shrink">
        <h1 v-if="acc.name" class="text-lg font-semibold">
          {{ acc.name }}
        </h1>
        <p v-if="acc.license" class="text-sm text-slate-600">
          {{ acc.license }}
        </p>
        <p v-if="acc.broker" class="text-sm text-slate-600">
          {{ acc.broker }}
        </p>
      </div>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap"
    >
      <span v-if="acc.f" class="p-1">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.ig" class="p-1">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.t" class="p-1">
        <a :href="acc.t" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a
          :href="`mailto:${acc.e}`"
          target="_blank"
          rel="noopener | noreferrer"
        >
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.p" class="p-1">
        <a :href="`tel:${acc.p}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:phone-duotone" class="h-6 w-6" />
        </a>
      </span>
    </div>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const metaTitle = props.acc.name + " | OpnHaus";
const metaDescription =
  "Visit my open House at " +
  props.acc.address +
  " presented by" +
  props.acc.name +
  " | Powered by OpnHaus";

useServerSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage: props.acc.propertyPhoto,
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.ig &&
    !props.acc.t &&
    !props.acc.l &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.p
  );
});
</script>
<style scoped></style>
