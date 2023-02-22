<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-30" @close="close">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <icon
                      name="material-symbols:check-circle-outline"
                      class="w-10 h-10 text-green-600"
                    />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg font-semibold leading-6 text-gray-700"
                      >Link Created!</DialogTitle
                    >
                    <div v-if="!shortSlug" class="mt-2">
                      <p class="text-gray-500">
                        Your custom open house link has been created.
                      </p>
                    </div>
                    <div v-if="shortSlug" class="mt-2">
                      <p class="text-gray-500">Your custom open house link to share:</p>
                      <a
                        class="font-semibold text-gray-700"
                        :href="'link/' + shortSlug"
                        target="_blank"
                      >
                        opn.haus/link/{{ shortSlug }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="publish"
                >
                  <span v-if="!loading">{{ buttonText }}</span>
                  <icon
                    v-if="loading"
                    name="icon-park-outline:loading-one"
                    class="animate-spin w-5 h-5"
                  />
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="close"
                  ref="cancelButtonRef"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { encodeData } from "../../utils/transformer";
const loading = ref(false);
const shortSlug = ref("");
const buttonText = ref("Copy to Clipboard");
const props = defineProps(["open", "data"]);
const emit = defineEmits(["update:open"]);

const close = () => {
  shortSlug.value = "";
  buttonText.value = "Copy to Clipboard";
  emit("update:open", false);
};

const publish = async () => {
  loading.value = true;
  const url = `1?data=${encodeData(props.data)}`;

  await $fetch("/api/shorten", {
    method: "POST",
    body: url,
  })
    .then((res) => {
      shortSlug.value = res.shortUrl;
      buttonText.value = "Copied!";
      navigator.clipboard.writeText(`opn.haus/link/${res.shortUrl}`);
    })
    .catch((err) => {
      console.log("Error publishing link: ", err);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
