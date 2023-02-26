<template>
  <body
    class="h-auto sm:h-screen w-screen flex justify-center items-center p-8 pb-24"
  >
    <section class="flex flex-col sm:flex-row justify-center items-center">
      <NuxtLink to="/create">
        <div
          class="h-[290px] w-[140px] sm:h-[400px] sm:w-[190px] md:h-[600px] md:w-[280px] hover:scale-105 transition-all duration-300"
        >
          <img src="/images/example.png" alt="Screenshot of OpnHaus web app." />
        </div>
      </NuxtLink>
      <div
        class="flex flex-col text-center sm:text-left justify-center sm:justify-start items-center sm:items-start w-auto sm:w-[380px] md:w-[480px] ml-0 sm:ml-4 md:ml-8 mt-4 sm:mt-0"
      >
        <h1 class="text-2xl md:text-3xl font-bold text-slate-800">
          Create beautiful open house landing pages.
        </h1>
        <h1
          class="mt-1 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
        >
          For free!
        </h1>

        <ul class="mt-4 text-xs sm:text-sm md:text-md text-left space-y-1">
          <li class="flex items-center">
            <icon
              name="material-symbols:check-circle-outline"
              class="w-6 h-6 mr-2 shrink-0"
            />Get a unique URL to promote open houses on social.
          </li>
          <li class="flex items-center">
            <icon
              name="material-symbols:check-circle-outline"
              class="w-6 h-6 mr-2 shrink-0"
            />Prospects can add your open house to their calendar.
          </li>
          <li class="flex items-center">
            <icon
              name="material-symbols:check-circle-outline"
              class="w-6 h-6 mr-2 shrink-0"
            />Drive traffic to your website and listings.
          </li>
          <li class="flex items-center">
            <icon
              name="material-symbols:check-circle-outline"
              class="w-6 h-6 mr-2 shrink-0"
            />Add ways for prospects to contact and follow you.
          </li>
        </ul>

        <button
          class="mt-6 h-12 flex items-center space-x-3 px-4 border-solid border-slate-800 border-2 text-md font-semibold text-slate-800 hover:text-white hover:bg-slate-800 transition-all duration-300 rounded-full"
        >
          <NuxtLink to="/create">Get Started</NuxtLink>
        </button>
      </div>
    </section>
  </body>
  <footer
    class="fixed bottom-0 left-0 w-screen bg-white p-4 h-[81px] flex justify-start items-center border-t"
  >
    <logo />
  </footer>
</template>
<script setup>
useHead({
  title: "OpnHaus | Create beautiful open house landing pages.",
  meta: [
    {
      name: "description",
      content:
        "An app for real estate agents to create beautiful landing pages for their open houses. Design and developed by Gavin Grant.",
    },
  ],
  script: [
    {
      type: "text/javascript",
      src: "https://www.googletagmanager.com/gtag/js?id=G-ZZK0R9H2LV",
      async: true,
    },
  ],
});

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-ZZK0R9H2LV");
</script>
