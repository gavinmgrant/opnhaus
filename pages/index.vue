<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-3 lg:col-span-2 h-screen flex flex-col bg-slate-100 z-20">
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
      <div class="border-t bg-white flex items-center justify-between p-4">
        <h1 class="text-3xl font-bold text-slate-800">OpnHaus</h1>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-3 px-4 border-r text-md font-semibold bg-slate-700 text-white rounded-full"
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
        "A link-in-bio app for real estate agents promoting their open house. Design and developed by Gavin Grant.",
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

const date = new Date();

let day = date.getDate().toString();
let month = (date.getMonth() + 1).toString();
let year = date.getFullYear().toString();
let currentDate = `${year}-${month.length === 1 ? "0" + month : month}-${
  day.length === 1 ? "0" + day : day
}`;

const prefillDemoData = () => {
  data.value = {
    property:
      "https://www.realtor.com/realestateandhomes-detail/8025-Rubicon-Way_San-Diego_CA_92126_M99783-38819?property_id=9978338819&from=ab_mixed_view_card",
    name: "Mark Mendez",
    license: "DRE#: 01974201",
    broker: "Compass",
    i: "https://www.compass.com/m3/e2d32288f56f0ca76b7fa1707640fcccf90f2be9/300x300.jpg",
    f: "https://www.fb.com/profile.php?id=100009683352338",
    t: "https://twitter.com/markhmendez",
    ig: "https://www.instagram.com/markhmendez",
    e: "mark.mendez@compass.com",
    p: "(310) 621-2531",
    y: "https://www.youtube.com/@markhmendez",
    l: "https://www.linkedin.com/in/markhmendez",
    times: [
      {
        date: currentDate,
        timeRange: "12pm - 3pm",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
