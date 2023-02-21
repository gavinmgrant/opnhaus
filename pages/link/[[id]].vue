<template>
  <div
    class="absolute w-full h-full flex flex-col items-center justify-center text-center"
  >
    <p class="mb-1">Loading your open house.</p>
    <icon name="icon-park-outline:loading-one" class="animate-spin w-8 h-8" />
  </div>
</template>
<script setup>
const route = useRoute();
const id = route.path.split("/link/").pop();

const redirect = async () => {
  await $fetch("/api/shorten", {
    method: "GET",
    query: { id },
  }).then((res) => {
    if (res === "Does not exist.") {
      navigateTo("/");
    } else {
      navigateTo(`/${res}`);
    }
  });
};

redirect();
</script>
