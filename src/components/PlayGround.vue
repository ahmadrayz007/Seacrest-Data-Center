<script setup>
import moment from "moment";
import { computed } from "vue";
// import"moment/locale/id";
import { useStorePoint } from "@/stores/storePoint.js";

const storePoint = useStorePoint();

const lat_lng = [
  {
    id: 1,
    lat: -6.9032739,
    long: 107.5729448,
  },
  {
    id: 2,
    lat: -6.9177936,
    long: 107.642921,
  },
];

let date = computed(() => {
  return moment().locale("id").format("MMMM Do YYYY");
});

console.log(date);

const halur = "hellow world";

console.log(lat_lng[0].lat);
</script>

<template>
  This is the PlayGround component
  <div v-for="item in lat_lng" :key="item.id">
    {{ item.lat }}
    {{ item.long }}
  </div>
  <div>
    {{ date }}
  </div>
  <div v-for="item in storePoint.play" :key="item.name" v-show="item.approve">
    {{ item.nama }}
  </div>
</template>
