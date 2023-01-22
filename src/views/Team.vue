<template>
  <NavBar />
  <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Team
          </h2>
          <p class="text-xl text-gray-300">
            We are
            <span
              class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"
              > Group - 12</span
            >
            of the Group Project in Software Development module of Second Year
            module in KDU.
          </p>
        </div>
        <div
          class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
        >
          <div
            v-for="person in people"
            :key="person.name"
            class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left"
          >
            <div class="space-y-6 xl:space-y-10">
              <img
                class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                :src="person.imageUrl"
                alt=""
              />
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3 class="text-white">{{ person.name }}</h3>
                  <p class="text-indigo-400">
                    {{ person.role }}<br />
                    Intake - 38
                  </p>
                  <span
                    class="text-lg inline-block py-2 px-4 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                    >{{ person.index }}</span
                  >
                  <br />
                  <br />
                </div>

                <div class="flex justify-center">
                  <a
                    :href="person.mailURL"
                    class="text-gray-400 hover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="{1.5}"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                      />
                    </svg>
                    <span> {{ person.mailURL }}@kdu.ac.lk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../component/NavBar.vue";
const people = [
  {
    name: "H B D Vidushan",
    role: "Computer Enginnering",
    index: "D - BCE - 21 - 0001",
    imageUrl: "public/DPs/cCGT02506 2.JPG",
    mailURL: "38-bce-0001",
  },
  {
    name: "W I A D Fernando",
    role: "Computer Enginnering",
    index: "D - BCE - 21 - 0004",
    imageUrl: "public/DPs/cimage0-01.png",
    mailURL: "38-bce-0004",
  },
  {
    name: "S N Jayasinghe",
    role: "Computer Enginnering",
    index: "D - BSE - 21 - 0007",
    imageUrl: "public/DPs/WhatsApp Image 2023-01-22 at 19.14.41.jpg",
    mailURL: "38-bse-0007",
  },
  {
    name: "J G D A R Shanilka",
    role: "Computer Enginnering",
    index: "D - BCS - 21 - 0008",
    imageUrl: "public/DPs/2023-01-22 at 19.18.56.jpg",
    mailURL: "38-bcs-0008",
  },
];
</script>
