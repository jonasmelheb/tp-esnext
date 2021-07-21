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

let { city, temperature } = weather

console.log(city);
console.log(temperature);

//Rest operator

const [parisId, nycId, ...othersCitiesId] = citiesId;


console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

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
        return "Free" + super.toString()
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
                this.tripServiceSet.forEach(element => {
                    if (element.name === tripName) {
                        resolve(element.id)
                    } else {
                        reject("No trip with name " + tripName)
                    }
                });
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
                if (this.tripServiceMap.has(tripId)) {
                    resolve("Price found : " + this.tripServiceMap.get(tripId))
                } else {
                    reject("No price for trip id " + tripId)
                }
            }, 2000)
        });
    }
}

const tripservice = new TripService();
const priceservice = new PriceService();

tripservice.findByName("Paris")
    .then((value) => console.log(value))
    .catch((err) => console.log(err))

tripservice.findByName("Toulouse")
    .then((value) => console.log(value))
    .catch((err) => console.log(err))

tripservice.findByName("Rio de Janeiro")
    .then((value) => priceservice.findPriceByTripId(value)
        .then((id) => console.log(id))
        .catch((error) => console.log(error)))
    .catch((error) => console.log(error))