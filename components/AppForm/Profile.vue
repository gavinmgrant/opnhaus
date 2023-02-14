<template>
  <base-form-section
    title="About You"
    description="Enter your name and information"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >License Number</label
          >
          <input
            type="text"
            name="license"
            id="license"
            :value="license"
            @input="$emit('update:license', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Broker</label
          >
          <input
            type="text"
            name="broker"
            id="broker"
            :value="broker"
            @input="$emit('update:broker', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >Photo Url</label
          >
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder=""
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps(["name", "license", "broker", "image"]);
</script>
