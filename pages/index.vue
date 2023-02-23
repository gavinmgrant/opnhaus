<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div
      class="col-span-3 lg:col-span-2 h-screen flex flex-col bg-slate-100 z-20"
    >
      <div class="flex-1 overflow-y-auto p-4">
        <app-form-property
          v-model:property="data.pr"
          v-model:photo="data.ph"
          v-model:address="data.ad"
          v-model:beds="data.bd"
          v-model:baths="data.ba"
          v-model:link="data.lk"
          v-model:propertySuccess="messages.propertySuccess"
          v-model:propertyError="messages.propertyError"
        />
        <app-form-hr />
        <app-form-times v-model="data.ti" />
        <app-form-hr />
        <app-form-profile
          v-model:state="state"
          v-model:name="data.agent.n"
          v-model:license="data.agent.l"
          v-model:broker="data.agent.b"
          v-model:image="data.agent.i"
          v-model:agentSuccess="messages.agentSuccess"
          v-model:agentError="messages.agentError"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:state="state"
          v-model:email="data.agent.e"
          v-model:phone="data.agent.p"
          v-model:website="data.agent.w"
          v-model:facebook="data.agent.fb"
          v-model:instagram="data.agent.in"
          v-model:tiktok="data.agent.tt"
          v-model:twitter="data.agent.tw"
          v-model:linkedin="data.agent.li"
          v-model:youtube="data.agent.yt"
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
          :disabled="data.ti.length < 1 || !data.ad || !state.n"
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
  u: "", // agent profile URL
  n: "", // agent name
  l: "", // license
  b: "", // broker
  i: "", // headshot image URL
  e: "", // email
  p: "", // phone
  w: "", // website URL
  fb: "", // facebook
  in: "", // instagram
  tt: "", // tiktok
  tw: "", // twitter
  li: "", // linkedin
  yt: "", // youtube
};

const state = useLocalStorage("OpnHaus", agent);

const data = ref({
  pr: "", // property URL
  ph: "", // property photo
  ad: "", // property address
  bd: "", // no. of beds
  ba: "", // no. of baths
  lk: "", // link to the listing
  ti: [], // array of open house times
  agent: state.value,
});

const messages = ref({
  propertySuccess: "",
  propertyError: "",
  agentSuccess: "",
  agentError: "",
});
</script>
