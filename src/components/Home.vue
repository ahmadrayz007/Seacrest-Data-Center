<script setup>
// Imports
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlZoom,
  LIcon,
  LControlLayers,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { ref } from "vue";

import { useStorePoint } from "@/stores/storePoint.js";

import Icon from "@/assets/seagrass-icon.png";

const storePoint = useStorePoint();

//scripts

const iconSize = ref([25, 16]);

const today = storePoint.today;

const icon = Icon;

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

const clickMarker = (e) => {
  console.log(e.latlng);
  this.map.mapObject.fitBounds(
    this.markers.map((m) => {
      return [m.lat, m.lng];
    })
  );
};

const tileLayers = [
  {
    name: "Carto Voyager",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    visible: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  {
    name: "Carto Positron",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png",
    visible: false,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  {
    name: "Esri World Imagery",
    url:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    visible: false,
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  },
];
</script>

<template>
  <div class="relative z-0 h-[calc(100vh-64px)]">
    <l-map
      ref="map"
      :zoom="5"
      :center="[-3.7506647, 117.234634]"
      :options="{ zoomControl: false }"
    >
      <l-control-layers />

      <l-tile-layer
        v-for="tileLayer in tileLayers"
        :key="tileLayer.name"
        :url="tileLayer.url"
        :attribution="tileLayer.attribution"
        :visible="tileLayer.visible"
        :name="tileLayer.name"
        layer-type="base"
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
