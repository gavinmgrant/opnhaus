<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div
      class="col-span-3 lg:col-span-2 h-screen flex flex-col bg-slate-100 z-20"
    >
      <div class="flex-1 overflow-y-auto p-4">
        <app-form-property
          v-model:property="data.property"
          v-model:photo="data.photo"
          v-model:address="data.address"
          v-model:beds="data.beds"
          v-model:baths="data.baths"
          v-model:propertySuccess="messages.propertySuccess"
          v-model:propertyError="messages.propertyError"
        />
        <app-form-hr />
        <app-form-times v-model="data.times" />
        <app-form-hr />
        <app-form-profile
          v-model:state="state"
          v-model:name="data.agent.name"
          v-model:license="data.agent.license"
          v-model:broker="data.agent.broker"
          v-model:image="data.agent.image"
          v-model:agentSuccess="messages.agentSuccess"
          v-model:agentError="messages.agentError"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:state="state"
          v-model:email="data.agent.email"
          v-model:phone="data.agent.phone"
          v-model:website="data.agent.website"
          v-model:facebook="data.agent.facebook"
          v-model:instagram="data.agent.instagram"
          v-model:tiktok="data.agent.tiktok"
          v-model:twitter="data.agent.twitter"
          v-model:linkedin="data.agent.linkedin"
          v-model:youtube="data.agent.youtube"
        />
      </div>
      <div
        class="relative bottom-0 left-0 w-full border-t bg-white flex items-center justify-between p-4"
      >
        <h1
          class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
        >
          OpnHaus
        </h1>
        <button
          @click="modalOn = true"
          :disabled="data.times.length < 1 || !data.address || !state.name"
          class="h-12 flex items-center space-x-3 px-4 border-r text-md font-semibold text-white rounded-full disabled:opacity-70 disabled:hover:cursor-not-allowed bg-gradient-to-r from-indigo-500 to-pink-500 opacity-90 hover:opacity-100 transitions-all duration-300"
        >
          <span>Create Link</span>
          <icon name="fluent:send-16-filled" class="h-5 w-5" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
  <app-form-modal v-model:open="modalOn" :data="data" />
</template>
<script setup>
import { useLocalStorage } from "@vueuse/core";

const modalOn = ref(false);

useHead({
  title: "OpnHaus | Open House Landing Pages",
  meta: [
    {
      name: "description",
      content:
        "An app for real estate agents to create beautiful landing pages for their open houses. Design and developed by Gavin Grant.",
    },
  ],
});

const agent = {
  url: "",
  name: "",
  license: "",
  broker: "",
  image: "",
  email: "",
  phone: "",
  website: "",
  facebook: "",
  instagram: "",
  tiktok: "",
  twitter: "",
  linkedin: "",
  youtube: "",
};

const state = useLocalStorage("OpnHaus", agent);

const data = ref({
  property: "",
  photo: "",
  address: "",
  beds: "",
  baths: "",
  times: [],
  agent: state.value,
});

const messages = ref({
  propertySuccess: "",
  propertyError: "",
  agentSuccess: "",
  agentError: "",
});
</script>
