<template>
  <base-form-section
    title="Property Data"
    description='Enter URL and click "submit" to get details'
  >
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Go to
        <a class="underline" href="https://www.realtor.com/" target="_blank"
          >realtor.com</a
        >
        to find the listing URL.
      </p>
    </template>
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label
            for="property-url"
            class="block text-sm font-medium text-gray-700"
            >Realtor.com URL</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="property-url"
              id="property-url"
              class="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm z-10"
              placeholder="https://www.realtor.com/example"
              :value="property"
              @input="$emit('update:property', $event.target.value)"
            />
            <button
              @click="fetchProperty(property)"
              class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
              :disabled="!property"
            >
              <span class="mr-2">Submit</span>
              <icon name="fluent:send-16-filled" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps([
  "property",
  "propertyPhoto",
  "address",
  "beds",
  "baths",
]);
const emit = defineEmits(["update:propertyPhoto"]);
const fetchProperty = async (property) => {
  await $fetch("/api/property", {
    method: "POST",
    body: property,
  }).then((res) => {
    emit("update:propertyPhoto", res.photoUrl);
    emit("update:address", res.address);
    emit("update:beds", res.beds);
    emit("update:baths", res.baths);
  });
};
</script>
