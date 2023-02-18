<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div
      class="col-span-3 lg:col-span-2 h-screen flex flex-col bg-slate-100 z-20"
    >
      <div class="flex-1 overflow-y-auto p-4">
        <app-form-property
          v-model:property="data.property"
          v-model:propertyPhoto="data.propertyPhoto"
          v-model:address="data.address"
          v-model:beds="data.beds"
          v-model:baths="data.baths"
          v-model:propertySuccess="data.propertySuccess"
          v-model:propertyError="data.propertyError"
        />
        <app-form-hr />
        <app-form-times v-model="data.times" />
        <app-form-hr />
        <app-form-profile
          v-model:state="state"
          v-model:name="data.agentData.name"
          v-model:license="data.agentData.license"
          v-model:broker="data.agentData.broker"
          v-model:image="data.agentData.image"
          v-model:agentSuccess="data.agentSuccess"
          v-model:agentError="data.agentError"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:state="state"
          v-model:email="data.agentData.email"
          v-model:phone="data.agentData.phone"
          v-model:facebook="data.agentData.facebook"
          v-model:instagram="data.agentData.instagram"
          v-model:twitter="data.agentData.twitter"
          v-model:linkedin="data.agentData.linkedin"
          v-model:youtube="data.agentData.youtube"
        />
      </div>
      <div
        class="relative bottom-0 left-0 w-full border-t bg-white flex items-center justify-between p-4"
      >
        <h1 class="text-3xl font-bold text-slate-800">OpnHaus</h1>
        <button
          @click="publish"
          :disabled="data.times.length < 1 || !data.address || !state.name"
          class="h-12 flex items-center space-x-3 px-4 border-r text-md font-semibold bg-slate-700 text-white rounded-full disabled:opacity-75 disabled:hover:cursor-not-allowed hover:bg-slate-800 transitions-all duration-300"
        >
          <span>Create Link</span>
          <icon name="fluent:send-16-filled" class="h-5 w-5" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>
<script setup>
import { encodeData } from "../utils/transformer";
import { useLocalStorage } from "@vueuse/core";

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

const agentData = {
  agentUrl: "",
  name: "",
  license: "",
  broker: "",
  image: "",
  email: "",
  phone: "",
  facebook: "",
  instagram: "",
  twitter: "",
  linkedin: "",
  youtube: "",
};

const state = useLocalStorage("OpnHaus", agentData);

const data = ref({
  property: "",
  propertySuccess: "",
  propertyError: "",
  propertyPhoto: "",
  address: "",
  beds: "",
  baths: "",
  agentSuccess: "",
  agentError: "",
  times: [],
  agentData: state.value,
});

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Your OpnHaus link is copied to clipboard!");
  });
};
</script>
