import { defineStore } from 'pinia'
import moment from 'moment'

export const useStorePoint = defineStore('storePoint', {
    state: () => {
        return {
            point: [
                {
                    id: 1,
                    lat: -6.9032739,
                    long: 107.5729448,
                    approve: true,
                    species: "Enhalus Acroides",
                    location: "Jepara",
                    discoverer: "Jan Ericson",
                    date: "",
                    messaage: "this is approved",

                },
                {
                    id: 2,
                    lat: -6.9170241,
                    long: 107.6333703,
                    approve: true,
                    species: "Enhalus Acroides",
                    location: "Semarang",
                    discoverer: "Aldi Rivaldy",
                    date: "",
                    messaage: "this is approved",

                },
                {
                    id: 3,
                    lat: -6.9192975,
                    long: 107.6384747,
                    approve: false,
                    species: "Enhalus Acroides",
                    location: "Pantai Kartini",
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