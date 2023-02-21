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
            >Realtor.com Agent URL (enter to autofill details)</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="agent-url"
              id="agent-url"
              class="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm z-10"
              placeholder="https://www.realtor.com/realestateagents/example"
              v-model="state.url"
            />
            <button
              @click="fetchAgent(state.url)"
              class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-200 px-3 text-sm text-gray-500 hover:text-slate-800 transitions-all duration-300"
            >
              <span class="mr-2">Autofill</span>
              <icon v-if="!loading" name="ion:wand" class="w-5 h-5" />
              <icon
                v-if="loading"
                name="icon-park-outline:loading-one"
                class="animate-spin w-5 h-5"
              />
            </button>
          </div>
          <div
            v-if="agentSuccess"
            class="text-sm text-green-600 text-center mt-2"
          >
            {{ agentSuccess }}
          </div>
          <div v-if="agentError" class="text-sm text-red-600 text-center mt-2">
            {{ agentError }}
          </div>
        </div>

        <app-form-toggle
          :text="toggleOn ? 'Hide details' : 'Show details'"
          :toggleOn="toggleOn"
          @click="toggleOn = !toggleOn"
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
            v-model="state.name"
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
            v-model="state.license"
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
            v-model="state.broker"
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
            placeholder=""
            v-model="state.image"
            @input="$emit('update:image', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
import { validateUrl } from "../../utils/validateUrl";

const toggleOn = ref(false);
const loading = ref(false);
const props = defineProps([
  "state",
  "name",
  "license",
  "broker",
  "image",
  "agentSuccess",
  "agentError",
]);
const emit = defineEmits([
  "update:name",
  "update:license",
  "update:broker",
  "update:image",
  "update:agentSuccess",
  "update:agentError",
]);
const fetchAgent = async (url) => {
  loading.value = true;
  const invalidUrl = !validateUrl(url);
  if (invalidUrl) {
    loading.value = false;
    emit("update:agentSuccess", "");
    return emit("update:agentError", "❌ Invalid URL. Please try again.");
  }

  await $fetch("/api/agent", {
    method: "POST",
    body: url,
  })
    .then((res) => {
      props.state.name = res.agentName;
      props.state.license = res.license;
      props.state.broker = res.broker;
      props.state.image = res.agentPhotoUrl;
      emit("update:name", res.agentName);
      emit("update:license", res.license);
      emit("update:broker", res.broker);
      emit("update:image", res.agentPhotoUrl);
      emit(
        "update:agentSuccess",
        res.agentName
          ? "🥳 Success! Your agent details have been added."
          : "🤔 We didn't find any agent info here. Try another URL."
      );
      emit("update:agentError", "");
    })
    .catch((err) => {
      console.log("Error fetching agent data: ", err);
      emit("update:agentSuccess", "");
      emit(
        "update:agentError",
        "❌ Sorry, we can't locate your profile. Please enter a valid Realtor.com URL."
      );
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
