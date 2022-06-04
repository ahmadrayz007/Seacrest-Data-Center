<script setup>
// Imports
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlZoom,
  LIcon,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "vue";

import { useStorePoint } from "@/stores/storePoint.js";
import Icon from "@/assets/seagrass-icon.png";

const storePoint = useStorePoint();

//scripts

const iconSize = ref([25, 16]);

const today = storePoint.today;

const icon = Icon

// const lat_lng = [
//   {
//     id: 1,
//     lat: -6.9032739,
//     long: 107.5729448,
//     message: "Lamun 1",
//   },
//   {
//     id: 2,
//     lat: -6.9177936,
//     long: 107.642921,
//     message: "Lamun 2",
//   },
// ];

</script>

<template>
  <div class="relative z-0 h-[calc(100vh-64px)]">
    <l-map
      :zoom="5"
      :center="[-3.7506647, 117.234634]"
      :options="{ zoomControl: false }"
    >
      <l-tile-layer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      ></l-tile-layer>
      <l-marker
        v-for="item in storePoint.point"
        :key="item.id"
        :lat-lng="[item.lat, item.long]"
        :visible="item.approve"
      >
        <l-icon :icon-url="icon" :iconSize="iconSize" />

        <l-popup>
          <img class="img_leaflet" src="@/assets/lamun.jpg" alt="" />
          <div class="content_species">
            <p><strong>Species:</strong> {{ item.species }}</p>
            <p><strong>Location:</strong> {{ item.location }}</p>
            <p><strong>Discoverer:</strong> {{ item.discoverer }}</p>
            <p><strong>Date:</strong> {{ today }}</p>
            <p>{{ item.messaage }}</p>
          </div>
        </l-popup>
      </l-marker>
      <l-control-zoom class="rounded-xl" position="topright"></l-control-zoom>
    </l-map>
  </div>
  <div
    class="fixed bottom-0 left-0 w-auto md:bottom-6 md:left-4 bg-white md:rounded-md text-5xl"
  >
    <h1>Apa ini!?</h1>
  </div>
</template>

<style>
.content_species {
  padding: 10px 0 10px 0;
}

p {
  margin: 0 !important;
}
.img_leaflet {
  width: 180px;
  height: 150px;
  margin-top: 30px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}
.leaflet-popup-content {
  width: 180px !important;
  text-align: left;
}
</style>
