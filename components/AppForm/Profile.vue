<template>
  <base-form-section
    title="Agent"
    description="Enter your name and information"
  >
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Go to
        <a
          class="underline"
          href="https://www.realtor.com/realestateagents/"
          target="_blank"
          >realtor.com</a
        >
        to find your agent URL.
      </p>
    </template>
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="agent-url" class="block text-sm font-medium text-gray-700"
            >Realtor.com Agent URL (will autofill info below)</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="agent-url"
              id="agent-url"
              class="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm z-10"
              placeholder="https://www.realtor.com/realestateagents/example"
              :value="agent"
              @input="$emit('update:agent', $event.target.value)"
            />
            <button
              @click="fetchAgent(agent)"
              class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
              :disabled="!agent"
            >
              <span class="mr-2">Autofill</span>
              <icon name="ion:wand" class="w-5 h-5" />
            </button>
          </div>
          <div v-if="agentError" class="text-sm text-red-600 text-center mt-2">
            Can't locate your profile. Please enter a valid URL.
          </div>
        </div>

        <app-form-toggle
          text="Edit agent details"
          :toggleOn="this.toggleOn"
          @click="handleToggle"
        />

        <div class="col-span-6 sm:col-span-3" v-if="toggleOn">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3" v-if="toggleOn">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >License Number</label
          >
          <input
            type="text"
            name="license"
            id="license"
            :value="license"
            @input="$emit('update:license', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3" v-if="toggleOn">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Broker</label
          >
          <input
            type="text"
            name="broker"
            id="broker"
            :value="broker"
            @input="$emit('update:broker', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="flex-grow col-span-6 sm:col-span-3" v-if="toggleOn">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >Agent Photo URL</label
          >
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder=""
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script>
export default {
  data() {
    return {
      toggleOn: false,
    };
  },
  methods: {
    handleToggle() {
      this.toggleOn = !this.toggleOn;
    },
  },
};
</script>
<script setup>
const props = defineProps([
  "agent",
  "name",
  "license",
  "broker",
  "image",
  "agentError",
]);
const emit = defineEmits([
  "update:name",
  "update:license",
  "update:broker",
  "update:image",
  "update:agentError",
]);
const fetchAgent = async (agent) => {
  await $fetch("/api/agent", {
    method: "POST",
    body: agent,
  })
    .then((res) => {
      emit("update:name", res.agentName);
      emit("update:license", res.license);
      emit("update:broker", res.broker);
      emit("update:image", res.agentPhotoUrl);
      emit("update:agentError", "");
    })
    .catch((error) => {
      emit("update:agentError", error);
    });
};
</script>
