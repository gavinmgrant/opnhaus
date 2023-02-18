<template>
  <main class="p-4 bg-white h-full w-full py-6 max-w-lg mx-auto text-slate-800">
    <section>
      <h1 class="text-center text-3xl font-semibold mb-2">Open House</h1>
      <div
        v-if="acc.propertyPhoto"
        class="w-full mb-2 rounded-lg bg-slate-50 shadow-lg"
      >
        <img
          :src="acc.propertyPhoto"
          alt="Property photo"
          class="h-full w-full object-cover rounded-t-lg"
        />
        <div class="px-1 py-4">
          <h1 v-if="acc.address" class="text-center font-medium mb-3">
            {{ acc.address }}
          </h1>
          <div
            v-if="acc.beds && acc.baths"
            class="flex items-center justify-center text-md font-medium mb-1"
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
        </div>
      </div>

      <ul class="space-y-2 mt-6">
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

      <div
        v-if="acc.agentData.name"
        class="flex items-center justify-start mt-6 w-full rounded-lg bg-slate-50 shadow-lg p-4"
      >
        <div
          v-if="acc.agentData.image"
          class="h-20 w-20 rounded-full overflow-hidden flex-none mr-4"
        >
          <img
            :src="acc.agentData.image"
            alt="Agent name"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 v-if="acc.agentData.name" class="text-lg font-semibold">
            {{ acc.agentData.name }}
          </h1>
          <p v-if="acc.agentData.license" class="text-sm text-slate-600">
            {{ acc.agentData.license }}
          </p>
          <p v-if="acc.agentData.broker" class="text-sm text-slate-600">
            {{ acc.agentData.broker }}
          </p>

          <div
            v-if="!allLinksAreEmpty"
            class="flex items-center justify-start flex-wrap mt-1"
          >
            <span v-if="acc.agentData.email" class="pr-2">
              <a
                :href="`mailto:${acc.agentData.email}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:envelope-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.phone" class="pr-2">
              <a
                :href="`tel:${acc.agentData.phone}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:phone-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.facebook" class="p2-2">
              <a
                :href="acc.agentData.facebook"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.instagram" class="pr-2">
              <a
                :href="acc.agentData.instagram"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.twitter" class="pr-2">
              <a
                :href="acc.agentData.twitter"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.linkedin" class="pr-2">
              <a
                :href="acc.agentData.linkedin"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agentData.youtube" class="pr-2">
              <a
                :href="acc.agentData.youtube"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:youtube-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center mt-6 pb-6">
      <a
        href="https://www.opn.haus/"
        target="_blank"
        rel="noopener | noreferrer"
      >
        <button
          class="bg-slate-400 hover:bg-slate-500 text-white text-xs px-4 py-2 rounded-full transitions-all duration-300"
        >
          Powered by OpnHaus
        </button>
      </a>
    </section>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const metaTitle =
  props.acc.agentData.name + " " + "Open House Landing Page by OpnHaus";
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
