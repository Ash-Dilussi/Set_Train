<template  >



  <div class="bg-repeat bg-gradient-to-b from-yellow-200 via-green-200 to-purple-300">
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p class="text-4xl text-center">Search Train</p>
    <br />

    <p class="text-gray-700 my-2 text-center">From</p>
    <From />

    <br />
    <br />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-8 h-8 mx-auto"
    >
      <path
        fill-rule="evenodd"
        d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
        clip-rule="evenodd"
      />
    </svg>

    <br />
    <br />
    <p class="text-gray-700 my-2 text-center">To</p>

    <From />
    <br />
    <br />
    <Date />
   <div class="text-center my-7">
    <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Search Train</button>
</div>
    <br />
    <br />
    <br />
    <br />
    <br />  <br />
    <br />  <br />
    <br />
  </div>



</template>

<script setup>
import From from "../component/Search/Location.vue";
import Date from "../component/Search/Date.vue";
import Navbar from '../component/NavBar.vue';
</script>

<style scoped></style>
