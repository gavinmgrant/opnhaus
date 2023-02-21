<template>
  <base-form-section
    title="Property"
    description="Enter details about the property"
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
        <div class="flex-grow col-span-6 sm:col-span-3 mb-8">
          <label
            for="property-url"
            class="block text-sm font-medium text-gray-700"
            >Realtor.com Listing URL (enter an ACTIVE listing to autofill
            details)</label
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
              class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-200 px-3 text-sm text-gray-500 hover:text-slate-800 transitions-all duration-300"
            >
              <span class="mr-2">Autofill</span>
              <icon v-if="!loading" name="ion:wand" class="w-5 h-5" />
              <icon
                v-if="loading"
                name="icon-park-outline:loading-one"
                class="animate-spin w-5 h-5"
              />
            </button>
          </div>
          <div
            v-if="propertySuccess"
            class="text-sm text-green-600 text-center mt-2"
          >
            {{ propertySuccess }}
          </div>
          <div
            v-if="propertyError"
            class="text-sm text-red-600 text-center mt-2"
          >
            {{ propertyError }}
          </div>

          <app-form-toggle
            :text="toggleOn ? 'Hide details' : 'Show details'"
            :toggleOn="toggleOn"
            @click="toggleOn = !toggleOn"
          />
        </div>

        <div class="col-span-6 sm:col-span-3" v-if="toggleOn">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            name="address"
            id="address"
            :value="address"
            @input="$emit('update:address', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div class="grid grid-cols-2 gap-4" v-if="toggleOn">
          <div>
            <label for="beds" class="block text-sm font-medium text-gray-700"
              >Beds</label
            >
            <input
              type="text"
              name="beds"
              id="beds"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
              :value="beds"
              @input="$emit('update:beds', $event.target.value)"
            />
          </div>
          <div>
            <label for="beds" class="block text-sm font-medium text-gray-700"
              >Baths</label
            >
            <input
              type="text"
              name="baths"
              id="baths"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
              :value="baths"
              @input="$emit('update:baths', $event.target.value)"
            />
          </div>
        </div>
        <div class="flex-grow col-span-6 sm:col-span-3" v-if="toggleOn">
          <label
            for="listing-photo-url"
            class="block text-sm font-medium text-gray-700"
            >Listing Photo URL</label
          >
          <input
            type="text"
            name="listing-photo-url"
            id="listing-photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder=""
            :value="photo"
            @input="$emit('update:photo', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
import { validateUrl } from "../../utils/validateUrl";

const toggleOn = ref(false);
const loading = ref(false);
const props = defineProps([
  "property",
  "propertySuccess",
  "propertyError",
  "photo",
  "address",
  "beds",
  "baths",
]);
const emit = defineEmits([
  "update:property",
  "update:photo",
  "update:address",
  "update:beds",
  "update:baths",
  "update:propertySuccess",
  "update:propertyError",
]);
const fetchProperty = async (url) => {
  loading.value = true;
  const invalidUrl = !validateUrl(url);
  if (invalidUrl) {
    loading.value = false;
    emit("update:propertySuccess", "");
    return emit("update:propertyError", "❌ Invalid URL. Please try again.");
  }

  await $fetch("/api/property", {
    method: "POST",
    body: url,
  })
    .then((res) => {
      emit("update:photo", res.photoUrl);
      emit("update:address", res.address);
      emit("update:beds", res.beds);
      emit("update:baths", res.baths);
      emit(
        "update:propertySuccess",
        res.address
          ? "🥳 Success! Your listing details have been added."
          : "🤔 We didn't find any listing info here. Try another URL."
      );
      emit("update:propertyError", "");
    })
    .catch((err) => {
      console.log("Error fetching listing data: ", err);
      emit("update:propertySuccess", "");
      emit(
        "update:propertyError",
        "❌ Sorry, we can't locate this listing. Please enter a valid Realtor.com URL."
      );
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
