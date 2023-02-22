<template>
  <main class="p-4 bg-white h-full w-full py-4 max-w-lg mx-auto text-slate-800">
    <section>
      <h1 class="text-center text-3xl font-bold mb-2">Open House</h1>
      <div
        v-if="acc.photo"
        class="w-full mb-2 rounded-lg bg-slate-50 shadow-lg"
      >
        <img
          :src="acc.photo"
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

      <ul class="space-y-2 mt-4">
        <open-house-time
          v-for="(time, id) in acc.times"
          :key="id"
          :date="time.date"
          :startTime="time.startTime"
          :endTime="time.endTime"
          :address="acc.address"
          :name="acc.agent.name"
        />
      </ul>

      <div
        v-if="acc.agent.name"
        class="flex items-center justify-start mt-4 w-full rounded-lg bg-slate-50 shadow-lg p-4"
      >
        <div
          v-if="acc.agent.image"
          class="h-20 w-20 rounded-full overflow-hidden flex-none mr-4"
        >
          <img
            :src="acc.agent.image"
            alt="Agent name"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 v-if="acc.agent.name" class="text-lg font-semibold">
            {{ acc.agent.name }}
          </h1>
          <p v-if="acc.agent.license" class="text-sm text-slate-600">
            {{ acc.agent.license }}
          </p>
          <p v-if="acc.agent.broker" class="text-sm text-slate-600">
            {{ acc.agent.broker }}
          </p>

          <div
            v-if="!allLinksAreEmpty"
            class="flex items-center justify-start flex-wrap mt-1"
          >
            <span v-if="acc.agent.email" class="pr-2">
              <a
                :href="`mailto:${acc.agent.email}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:envelope-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.phone" class="pr-2">
              <a
                :href="`tel:${acc.agent.phone}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:phone-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.website" class="pr-2">
              <a
                :href="acc.agent.website"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:apple-podcasts-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.facebook" class="pr-2">
              <a
                :href="acc.agent.facebook"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.instagram" class="pr-2">
              <a
                :href="acc.agent.instagram"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.tiktok" class="pr-2">
              <a
                :href="acc.agent.tiktok"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:tiktok-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.twitter" class="pr-2">
              <a
                :href="acc.agent.twitter"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.linkedin" class="pr-2">
              <a
                :href="acc.agent.linkedin"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.youtube" class="pr-2">
              <a
                :href="acc.agent.youtube"
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
    <section class="text-center mt-4 pb-4">
      <a
        href="https://www.opn.haus/"
        target="_blank"
        rel="noopener | noreferrer"
      >
        <button
          class="text-sm px-4 py-2 rounded-full border-solid border-2 border-slate-800"
        >
          Powered by <span class="font-semibold">OpnHaus</span>
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
  props.acc.agent.name + " " + "Open House Landing Page by OpnHaus";
const metaDescription =
  "Visit my open House at " +
  props.acc.address +
  " presented by" +
  props.acc.agent.name +
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
    !props.acc.agent.email &&
    !props.acc.agent.phone &&
    !props.acc.agent.facebook &&
    !props.acc.agent.instagram &&
    !props.acc.agent.twitter &&
    !props.acc.agent.linkedin &&
    !props.acc.agent.youtube
  );
});
</script>
<style scoped></style>
