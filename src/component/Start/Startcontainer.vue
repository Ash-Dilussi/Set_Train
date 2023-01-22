<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="container relative -mt-5 bg-gray-50 rounded-t-3xl mx-auto pt-5 sm:px-6 lg:px-8 text-center p-9"
  >
    <!-- Content goes here -->
    <h1 class="p-9 pt-12 text-lg font-medium leading-6 text-gray-900">
      Sri Lanka's first train app.
    </h1>

    <p class="px-3 pb-9 text-sm text-gray-500">
      The Sri Lanka Department is the Sri Lanka's railway owner and primary
      operator.
    </p>
    <button
      type="button"
      class="inline-flex justify-center rounded-lg border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    ><router-link :to="{name: 'Menu'}">
      Get Started</router-link>
    </button>
  </div>
</template>

<style scoped></style>
