<script setup>
import { useStorePoint } from "@/stores/storePoint.js";
import { ref } from "vue";

const title = ref("Input Data");


const storePoint = useStorePoint();


const first_name = ref("");
const last_name = ref("");
const seagrass_species = ref("");
const location = ref("");
const latitude = ref("");
const longitude = ref("");

const discoverer = first_name.value


let dataForm = [{
  discoverer: `${first_name.value} ${last_name.value}`,
  species: seagrass_species.value,
  location: location.value,
  date: storePoint.today,
  lat: latitude.value,
  long: longitude.value,
}]

const addPoint = () => {
  storePoint.addPoint(latitude.value, longitude.value, seagrass_species.value, location.value, first_name.value);
  console.log(storePoint.point);

};

</script>

<template>
  <div class="mt-10 container mx-auto">
    <div class="text-3xl mb-10 text-center">
      <h1>{{ title }}</h1>
    </div>

    <form @submit.prevent="addPoint">
      <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >First name</label
          >
          <input
            type="text"
            id="first_name"
            v-model="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required=""
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Last name</label
          >
          <input
            type="text"
            id="last_name"
            v-model="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required=""
          />
        </div>
        <div>
          <label
            for="seagrass_species"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Seagrass Species</label
          >
          <input
            type="text"
            id="seagrass_species"
            v-model="seagrass_species"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enhalus Acroides"
            required=""
          />
        </div>
        <div>
          <label
            for="location"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Location</label
          >
          <input
            type="text"
            id="location"
            v-model="location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pantai Jepara"
            required=""
          />
        </div>
      </div>
      <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          <label
            for="latitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Latitude</label
          >
          <input
            type="text"
            id="latitude"
            v-model="latitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required=""
          />
        </div>
        <div>
          <label
            for="longitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Longitude</label
          >
          <input
            type="text"
            id="longitude"
            v-model="longitude"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required=""
          />
        </div>
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required=""
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >I agree with the
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >terms and conditions</a
          >.</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
    {{ first_name }}
  </div>
</template>
