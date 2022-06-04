import { defineStore } from 'pinia'
import moment from 'moment'

export const useStorePoint = defineStore('storePoint', {
    state: () => {
        return {
            point: [
                {
                    id: 1,
                    lat: -6.62165278,
                    long: 110.63735556,
                    approve: true,
                    species: "Enhalus Acroides",
                    location: "Jepara",
                    discoverer: "Jan Ericson",
                    date: "",
                    messaage: "this is approved",

                },
                {
                    id: 2,
                    lat: -6.62711111,
                    long: 110.63702222,
                    approve: true,
                    species: "Enhalus Acroides",
                    location: "Jepara",
                    discoverer: "Aldi Rivaldy",
                    date: "",
                    messaage: "this is approved",

                },
                {
                    id: 3,
                    lat: -6.57660000,
                    long: 110.63093056,
                    approve: false,
                    species: "Enhalus Acroides",
                    location: "Pulau Panjang",
                    discoverer: "Aldi Rivaldy",
                    date: "",
                    messaage: "this is un-approved",

                },
            ],
            play: [
                {
                    nama: "Ahmad",
                    umur: 20,
                    approve: true,
                },
                {
                    nama: "Budi",
                    umur: 21,
                    approve: true,
                },
                {
                    nama: "Caca",
                    umur: 22,
                    approve: false,
                }
            ]
        }
    },
    getters: {
        today() {
            return moment().locale("id").format("MMMM Do YYYY");
        },
    },
    actions: {
        addPoint(newLat, newLong, newSpecies, newLocation, newDiscoverer, approve = true) {
            this.point.push({
                id: this.point.length + 1,
                lat: newLat,
                long: newLong,
                approve: approve,
                species: newSpecies,
                location: newLocation,
                discoverer: newDiscoverer,
                date: this.today,
                messaage: "this is approved",
            });
        }
    }
})