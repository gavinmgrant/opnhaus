<template>
  <div
    v-if="!error"
    class="absolute w-full h-full flex flex-col items-center justify-center text-center"
  >
    <p class="mb-1">Loading your open house.</p>
    <icon name="icon-park-outline:loading-one" class="animate-spin w-8 h-8" />
  </div>
  <div
    v-if="error"
    class="absolute w-full h-full flex flex-col items-center justify-center text-center"
  >
    <p class="mb-1">Oops! Something went wrong. Please try again.</p>
    <icon name="material-symbols:error-circle-rounded-outline" class="w-8 h-8" />
  </div>
</template>s
<script setup>
const error = ref(false);
const route = useRoute();
const id = route.path.split("/link/").pop();

const redirect = async () => {
  await $fetch("/api/lengthen", {
    method: "GET",
    query: { id },
  })
    .then((res) => {
      if (res === "Does not exist.") {
        navigateTo("/");
      } else {
        navigateTo(`/${res}`);
      }
    })
    .catch((err) => {
      error.value = true;
      console.log("Error fetching this listing", err);
    });
};

redirect();
</script>
