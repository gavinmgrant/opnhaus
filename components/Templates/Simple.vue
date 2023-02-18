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
        :name="acc.agentData.name"
      />
    </ul>
    <div class="flex items-center justify-center mt-12">
      <div
        v-if="acc.agentData.image"
        class="h-20 w-20 rounded-full overflow-hidden flex-none"
      >
        <img
          :src="acc.agentData.image"
          alt="Agent name"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="m-4 shrink">
        <h1 v-if="acc.agentData.name" class="text-lg font-semibold">
          {{ acc.agentData.name }}
        </h1>
        <p v-if="acc.agentData.license" class="text-sm text-slate-600">
          {{ acc.agentData.license }}
        </p>
        <p v-if="acc.agentData.broker" class="text-sm text-slate-600">
          {{ acc.agentData.broker }}
        </p>
      </div>
    </div>
    <div
      v-if="!allLinksAreEmpty"
      class="flex items-center justify-center flex-wrap"
    >
      <span v-if="acc.agentData.email" class="p-1">
        <a
          :href="`mailto:${acc.agentData.email}`"
          target="_blank"
          rel="noopener | noreferrer"
        >
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.phone" class="p-1">
        <a
          :href="`tel:${acc.agentData.phone}`"
          target="_blank"
          rel="noopener | noreferrer"
        >
          <icon name="ph:phone-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.facebook" class="p-1">
        <a :href="acc.agentData.facebook" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.instagram" class="p-1">
        <a :href="acc.agentData.instagram" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.twitter" class="p-1">
        <a :href="acc.agentData.twitter" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.linkedin" class="p-1">
        <a :href="acc.agentData.linkedin" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.agentData.youtube" class="p-1">
        <a :href="acc.agentData.youtube" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
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

const metaTitle = props.acc.agentData.name + " | OpnHaus";
const metaDescription =
  "Visit my open House at " +
  props.acc.address +
  " presented by" +
  props.acc.agentData.name +
  " | Powered by OpnHaus";

useServerSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage: props.acc.propertyPhoto,
});

const allLinksAreEmpty = computed(() => {
  return (
    !props.acc.agentData.email &&
    !props.acc.agentData.phone &&
    !props.acc.agentData.facebook &&
    !props.acc.agentData.instagram &&
    !props.acc.agentData.twitter &&
    !props.acc.agentData.linkedin &&
    !props.acc.agentData.youtube
  );
});
</script>
<style scoped></style>
