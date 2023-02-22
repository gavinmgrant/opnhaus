<template>
  <base-form-section
    title="Links"
    description="Enter your contact info and social links"
  >
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        Buttons will be added below your name.
      </p>
    </template>
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-1 gap-4 bg-white px-4 py-5 sm:p-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:envelope-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="email"
              id="email"
              v-model="state.e"
              @input="$emit('update:email', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="agent@example.com"
            />
          </div>
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:phone-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="phone"
              id="phone"
              v-model="state.p"
              @input="$emit('update:phone', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
        <div>
          <label for="website" class="block text-sm font-medium text-gray-700"
            >Website</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:apple-podcasts-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="website"
              id="website"
              v-model="state.w"
              @input="$emit('update:website', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://agent.com"
            />
          </div>
        </div>
        <div>
          <label for="facebook" class="block text-sm font-medium text-gray-700"
            >Facebook</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:facebook-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="facebook"
              id="facebook"
              v-model="state.fb"
              @input="$emit('update:facebook', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://fb.com/agent"
            />
          </div>
        </div>
        <div>
          <label for="instagram" class="block text-sm font-medium text-gray-700"
            >Instagram</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:instagram-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="instagram"
              id="instagram"
              v-model="state.in"
              @input="$emit('update:instagram', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://instagram.com/agent"
            />
          </div>
        </div>
        <div>
          <label for="tiktok" class="block text-sm font-medium text-gray-700"
            >TikTok</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:tiktok-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="tiktok"
              id="tiktok"
              v-model="state.tt"
              @input="$emit('update:tiktok', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://www.tiktok.com/@agent"
            />
          </div>
        </div>
        <div>
          <label for="twitter" class="block text-sm font-medium text-gray-700"
            >Twitter</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:twitter-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="twitter"
              id="twitter"
              v-model="state.tw"
              @input="$emit('update:twitter', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://twitter.com/agent"
            />
          </div>
        </div>

        <div>
          <label for="linkdin" class="block text-sm font-medium text-gray-700"
            >Linkedin</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:linkedin-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="linkedin"
              id="linkedin"
              v-model="state.li"
              @input="$emit('update:linkedin', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://www.linkedin.com/in/agent"
            />
          </div>
        </div>
        <div>
          <label for="youtube" class="block text-sm font-medium text-gray-700"
            >Youtube</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:youtube-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="youtube"
              id="youtube"
              v-model="state.yt"
              @input="$emit('update:youtube', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://www.youtube.com/@agent"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps([
  "state",
  "email",
  "phone",
  "website",
  "facebook",
  "instagram",
  "tiktok",
  "twitter",
  "linkedin",
  "youtube",
]);
</script>
