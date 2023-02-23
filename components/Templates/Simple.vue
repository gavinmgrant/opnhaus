<template>
  <main class="p-4 bg-white h-full w-full py-4 max-w-lg mx-auto text-slate-800">
    <section>
      <header class="relative flex items-center justify-center mb-2">
        <h1 class="text-center text-3xl font-bold">Open House</h1>

        <button @click="copyToClipboard" class="absolute right-0">
          <icon name="material-symbols:share" class="h-7 w-7" />
        </button>
      </header>
      <div
        v-if="acc.ph"
        class="w-full mb-2 rounded-lg bg-slate-50 shadow-lg overflow-hidden"
      >
        <a
          v-if="acc.lk"
          :href="acc.lk"
          target="_blank"
          rel="noopener | noreferrer"
        >
          <img
            :src="acc.ph"
            alt="Property photo"
            class="h-full w-full object-cover rounded-t-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
          />
        </a>
        <img
          v-if="!acc.lk"
          :src="acc.ph"
          alt="Property photo"
          class="h-full w-full object-cover rounded-t-lg"
        />
        <div class="px-1 py-4">
          <h1 v-if="acc.ad" class="text-center font-medium mb-3">
            {{ acc.ad }}
          </h1>
          <div
            v-if="acc.bd && acc.ba"
            class="flex items-center justify-center text-md font-medium mb-1"
          >
            <icon name="material-symbols:bedroom-child" class="h-8 w-8" /><span
              class="ml-1"
              >{{ acc.bd }} bed</span
            >
            <icon name="material-symbols:bathroom" class="h-8 w-8 ml-4" /><span
              class="ml-1"
              >{{ acc.ba }} bath</span
            >
          </div>
        </div>
      </div>

      <ul class="space-y-2 mt-4">
        <open-house-time
          v-for="(time, id) in acc.ti"
          :key="id"
          :date="time.date"
          :startTime="time.startTime"
          :endTime="time.endTime"
          :address="acc.ad"
          :name="acc.agent.n"
        />
      </ul>

      <div
        v-if="acc.agent.n"
        class="flex items-center justify-start mt-4 w-full rounded-lg bg-slate-50 shadow-lg p-4"
      >
        <div
          v-if="acc.agent.i"
          class="h-20 w-20 rounded-full overflow-hidden flex-none mr-4"
        >
          <a
            v-if="acc.agent.w"
            :href="acc.agent.w"
            target="_blank"
            rel="noopener | noreferrer"
          >
            <img
              :src="acc.agent.i"
              alt="Agent photo"
              class="h-full w-full object-cover cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
            />
          </a>

          <img
            v-if="!acc.agent.w"
            :src="acc.agent.i"
            alt="Agent photo"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 v-if="acc.agent.n" class="text-lg font-semibold">
            {{ acc.agent.n }}
          </h1>
          <p v-if="acc.agent.l" class="text-sm text-slate-600">
            {{ acc.agent.l }}
          </p>
          <p v-if="acc.agent.b" class="text-sm text-slate-600">
            {{ acc.agent.b }}
          </p>

          <div
            v-if="!allLinksAreEmpty"
            class="flex items-center justify-start flex-wrap mt-1"
          >
            <span v-if="acc.agent.e" class="pr-2 pb-1">
              <a
                :href="`mailto:${acc.agent.e}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:envelope-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.p" class="pr-2 pb-1">
              <a
                :href="`tel:${acc.agent.p}`"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:phone-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.w" class="pr-2 pb-1">
              <a
                :href="acc.agent.w"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:apple-podcasts-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.fb" class="pr-2 pb-1">
              <a
                :href="acc.agent.fb"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:facebook-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.in" class="pr-2 pb-1">
              <a
                :href="acc.agent.in"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:instagram-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.tt" class="pr-2 pb-1">
              <a
                :href="acc.agent.tt"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:tiktok-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.tw" class="pr-2 pb-1">
              <a
                :href="acc.agent.tw"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:twitter-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.li" class="pr-2 pb-1">
              <a
                :href="acc.agent.li"
                target="_blank"
                rel="noopener | noreferrer"
              >
                <icon name="ph:linkedin-logo-duotone" class="h-6 w-6" />
              </a>
            </span>
            <span v-if="acc.agent.yt" class="pr-2 pb-1">
              <a
                :href="acc.agent.yt"
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

    <modal-share v-model:open="modalOn" :shortSlug="shortSlug" />
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
  longSlug: {
    type: String,
    required: false,
  },
});

const allLinksAreEmpty = computed(() => {
  return (
    !props.acc.agent.e &&
    !props.acc.agent.p &&
    !props.acc.agent.w &&
    !props.acc.agent.fb &&
    !props.acc.agent.in &&
    !props.acc.agent.tt &&
    !props.acc.agent.tw &&
    !props.acc.agent.li &&
    !props.acc.agent.yt
  );
});

const modalOn = ref(false);
const shortSlug = ref("");

const getShortSlug = async () => {
  await $fetch("/api/shorten", {
    method: "GET",
    query: { id: `1?data=${props.longSlug}` },
  }).then((res) => {
    if (res === "Does not exist.") {
      shortSlug.value = "";
    } else {
      shortSlug.value = res;
    }
  });
};

getShortSlug();

const copyToClipboard = () => {
  modalOn.value = true;
  navigator.clipboard.writeText(`opn.haus/link/${shortSlug.value}`);
};
</script>
<style scoped></style>
