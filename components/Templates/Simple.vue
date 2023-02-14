<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <ul class="space-y-2">
      <open-house-time
        v-for="(time, id) in acc.times"
        :date="time.date"
        :timeRange="time.timeRange"
        :key="id"
      />
    </ul>
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.license" class="text-sm mt-2 text-slate-600">
        {{ acc.license }}
      </p>
      <p v-if="acc.broker" class="text-sm mt-2 text-slate-600">
        {{ acc.broker }}
      </p>
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
