<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div
      class="col-span-3 lg:col-span-2 h-screen flex flex-col bg-slate-100 z-20"
    >
      <div class="flex-1 overflow-y-auto p-4">
        <app-form-profile
          v-model:agent="data.agent"
          v-model:name="data.name"
          v-model:license="data.license"
          v-model:broker="data.broker"
          v-model:image="data.i"
          v-model:agentError="data.agentError"
        />
        <app-form-hr />
        <app-form-property
          v-model:property="data.property"
          v-model:propertyPhoto="data.propertyPhoto"
          v-model:address="data.address"
          v-model:beds="data.beds"
          v-model:baths="data.baths"
          v-model:propertyError="data.propertyError"
        />
        <app-form-hr />
        <app-form-times v-model="data.times" />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:instagram="data.ig"
          v-model:twitter="data.t"
          v-model:linkedin="data.l"
          v-model:youtube="data.y"
          v-model:email="data.e"
          v-model:phone="data.p"
        />
      </div>
      <div
        class="relative bottom-0 left-0 w-full border-t bg-white flex items-center justify-between p-4"
      >
        <h1 class="text-3xl font-bold text-slate-800">OpnHaus</h1>
        <button
          @click="publish"
          :disabled="data.times.length < 1 || !data.address || !data.name"
          class="h-12 flex items-center space-x-3 px-4 border-r text-md font-semibold bg-slate-700 text-white rounded-full disabled:opacity-75 disabled:hover:cursor-not-allowed active:bg-slate-800"
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

useHead({
  title: "OpnHaus",
  meta: [
    {
      name: "description",
      content:
        "An app for real estate agents to create beautiful landing pages for their open houses. Design and developed by Gavin Grant.",
    },
  ],
});

const data = ref({
  property: "",
  propertyError: "",
  propertyPhoto: "",
  address: "",
  beds: "",
  baths: "",
  agent: "",
  agentError: "",
  name: "",
  license: "",
  broker: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  l: "",
  e: "",
  y: "",
  p: "",
  times: [],
});

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Your OpnHaus link is copied to clipboard!");
  });
};
</script>
