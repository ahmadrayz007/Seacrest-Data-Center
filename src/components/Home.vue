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

// Store imports
import { useStorePoint } from "@/stores/storePoint.js";
import { useStoreTileLayers } from "../stores/storeTileLayers";

//import images
import Icon from "@/assets/seagrass-icon.png";

//use stores
const storePoint = useStorePoint();
const storeTileLayers = useStoreTileLayers();

//scripts

const iconSize = ref([25, 16]);

const today = storePoint.today;

const icon = Icon;s

const clickMarker = (e) => {
  console.log(e.latlng);
  this.map.mapObject.fitBounds(
    this.markers.map((m) => {
      return [m.lat, m.lng];
    })
  );
};

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
        v-for="tileLayer in storeTileLayers.tileLayers"
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
