//let

let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// Const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);

// Création d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather("paris");
console.log(weather);

//Affectation destructurée

const city = weather.city;
const temperature = weather.temperature;

console.log(city);
console.log(temperature);

//Rest operator

const parisId = citiesId.shift();
const nycId = citiesId.shift();
const othersCitiesId = citiesId.length;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);

// Classe 
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Paris", "img / paris.jpg");
    }
}

const parisIdObject = new Trip("paris", "Paris", "img / paris.jpg");
console.log(parisIdObject);
console.log(parisIdObject.name);

parisIdObject.price = 100;

console.log(parisIdObject.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

//Héritage

class FreeTrip extends Trip {
    price = 0;

    toString() {
        return "FreeTrip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toString());

// Promise, Set, Map, Arrow Function

class TripService {
    tripServiceSet = new Set();
    constructor() {
        // TODO Set of 3 trips
        let paris = new Trip('paris', 'Paris', 'img/paris.jpg');
        let nantes = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        let rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        this.tripServiceSet.add(paris);
        this.tripServiceSet.add(nantes);
        this.tripServiceSet.add(rio);
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (tripName == "paris") {
                    resolve(console.log("Trip found : " + this.tripServiceSet.values().next().value));
                } else if (tripName == "nantes") {
                    resolve(console.log("Trip found : " + this.tripServiceSet.values().next().value));
                } else if (tripName == "rio-de-janeiro") {
                    resolve(console.log("Trip found : " + this.tripServiceSet.values().next().value));
                } else {
                    reject(console.log("No trip with name " + tripName));
                }
            }, 2000)
        });
    }
}
class PriceService {
    tripServiceMap = new Map();
    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'

        this.tripServiceMap.set("paris", 100)
        this.tripServiceMap.set("rio-de-janeiro", 800)
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de
                //la recherche

                if (tripId == "paris") {
                    resolve(console.log("Price found : " + this.tripServiceMap.get("paris")))
                } else if (tripId == "rio-de-janeiro") {
                    resolve(console.log("Price found : " + this.tripServiceMap.get("rio-de-janeiro")))
                } else {
                    reject(console.log("No price for trip id " + tripId))
                }
            }, 2000)
        });
    }
}

const tripservice = new TripService();
const priceservice = new PriceService();

tripservice.findByName("paris")
priceservice.findPriceByTripId("paris")