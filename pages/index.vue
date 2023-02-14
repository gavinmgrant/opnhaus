<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-times v-model="data.times" />
        <app-form-hr />
        <app-form-profile
          v-model:name="data.n"
          v-model:license="data.license"
          v-model:broker="data.broker"
          v-model:image="data.i"
        />
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
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Autofill with example data </span>
          <icon name="ion:wand" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  license: "",
  broker: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
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
    n: "Mark Mendez",
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
