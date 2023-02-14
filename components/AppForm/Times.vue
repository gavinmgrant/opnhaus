<template>
  <base-form-section
    title="Dates and Times"
    description="When will your open house(s) be?"
  >
    <draggable
      :list="modelValue"
      item-key="time"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element: time }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <icon
              name="radix-icons:drag-handle-dots-2"
              class="h-6 w-6 text-slate-500 drag-handle"
            />
          </button>
          <button
            @click="removeTime(time)"
            class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
          >
            <icon name="fluent:dismiss-24-regular" class="h-4 w-4" />
          </button>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Date</label
                  >
                  <input
                    type="date"
                    name="date"
                    id="date"
                    v-model="time.date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="time"
                    class="block text-sm font-medium text-gray-700"
                    >Time</label
                  >
                  <input
                    type="text"
                    name="time"
                    id="time"
                    v-model="time.timeRange"
                    placeholder="1pm - 4pm"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <p
                class="mt-2 text-xs text-center text-slate-400"
                v-if="!time.date || !time.timeRange"
              >
                This will appear in preview once a date and time are added
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <button
      @click="appendTime"
      class="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2"
    >
      <div class="flex justify-center items-center text-sm text-gray-600">
        <p class="mr-1">Add time</p>
        <icon name="fluent:add-circle-24-regular" class="h-6 w-6" />
      </div>
    </button>
  </base-form-section>
</template>
<script setup>
import draggable from "vuedraggable";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: Array,
});
const appendTime = () => {
  props.modelValue.push({
    date: "",
    timeRange: "",
  });
  emit("update:modelValue", props.modelValue);
};

const removeTime = (time) => {
  const index = props.modelValue.indexOf(time);
  props.modelValue.splice(index, 1);
  emit("update:modelValue", props.modelValue);
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
