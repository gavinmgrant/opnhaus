<template>
  <li>
    <div v-if="date && startTime && endTime">
      <dt
        class="flex items-center p-1 rounded-lg bg-slate-50 shadow-lg"
      >
        <add-to-calendar-button
          :name="'Open House by' + name"
          options="'Apple','Google', 'Outlook.com'"
          :location="address"
          :startDate="date"
          :endDate="date"
          :startTime="startTime"
          :endTime="endTime"
          timeZone="currentBrowser"
          hideTextLabelButton
          buttonStyle="round"
          listStyle="modal"
        />
        <div class="w-full flex min-w-0 ml-1">
          <p class="font-medium text-sm leading-6 text-gray-900">
            {{ format(parse(date, "yyyy-MM-dd", new Date()), "MM/dd/yyyy") }}
          </p>
          <p class="font-medium text-sm leading-6 text-gray-900 ml-3">
            {{ format(parse(startTime, "HH:mm", new Date()), "hh:mm a") }} -
            {{ format(parse(endTime, "HH:mm", new Date()), "hh:mm a") }}
          </p>
        </div>
      </dt>
    </div>
  </li>
</template>
<script setup>
import "add-to-calendar-button";
import { format, parse } from "date-fns";
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
