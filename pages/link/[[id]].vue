<template></template>
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
