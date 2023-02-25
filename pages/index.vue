<template>
  <body
    class="h-screen w-screen flex justify-center items-center p-4 pb-12 sm:pb-0"
  >
    <section class="flex flex-col sm:flex-row justify-center items-center">
      <NuxtLink to="/create">
        <div class="h-[300px] w-[148px] sm:h-[400px] sm:w-[198px] md:h-[500px] md:w-[247px]">
          <img src="/images/example.png" alt="Screenshot of OpnHaus web app." />
        </div>
      </NuxtLink>
      <div
        class="flex flex-col text-center sm:text-left justify-center sm:justify-start items-center sm:items-start w-auto sm:w-[360px] md:w-[480px] ml-0 sm:ml-4 md:ml-8 mt-6 sm:mt-0"
      >
        <h1 class="text-2xl md:text-3xl font-bold">
          Create beautiful open house landing pages.
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
            >For free!</span
          >
        </h1>
        <button
          class="mt-4 h-12 flex items-center space-x-3 px-4 border-solid border-black border-2 text-md font-semibold text-black rounded-full"
        >
          <NuxtLink to="/create">Get Started</NuxtLink>
        </button>
      </div>
    </section>
  </body>
  <footer
    class="fixed bottom-0 left-0 w-screen bg-transparent p-4 h-[81px] flex justify-start items-center"
  >
    <logo />
  </footer>
</template>
<script setup>
useHead({
  title: "OpnHaus | Open House Landing Pages",
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
