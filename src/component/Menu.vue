<template>
  <div class="text-center">
    <h3 class="text-4xl p-9 text-gray-900">Set Your Train</h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.id"
        class="relative overflow-hidden rounded-lg bg-white px-6 pt-12 pb-12 shadow sm:px-6 sm:pt-6"
      >
        <dt>
          <div class="absolute rounded-md bg-indigo-500 p-3">
            <component
              :is="item.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <p class="ml-6 truncate text-2xl font-semibold text-gray-900">
            {{ item.name }}
          </p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-lg text-indigo-600 hover:text-indigo-500"
              ><router-link :to="{name: item.routename }">
              View</router-link> <span class="sr-only"> {{ item.name }} </span></a
              >
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>

  <div class="flex space-x-2 justify-center"></div>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const stats = [
  {
    id: 1,
    name: "Search Train",
    routename:"Search",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Track Train",
    routename:"Search",
    icon: EnvelopeOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Book Train",
    icon: CursorArrowRaysIcon,
    routename:"Book",
    change: "3.2%",
    changeType: "decrease",
  },
];
</script>
