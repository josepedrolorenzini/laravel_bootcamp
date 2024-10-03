"use strict";
//typoes
const persona1 = {
    name: "John Doe",
    age: 30,
    country: "USA"
};
const data = {
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "12345"
    },
    "hobbies": ["reading", "painting", "cooking"]
};
const DATA2 = {
    "name": "Jane Doe",
    "age": 25
};
const firstSong = {
    name: "las flores",
    duration: 3.5,
    album: {
        title: "El reino del ruido",
        year: 2020,
        songs: ["firstSong", "lastSong"]
    }
};
if (firstSong.album) {
    console.log(firstSong.album.title);
}
const myFavoriteSongIn2010 = {
    name: "Heartbreak Hotel",
    duration: 4.2,
};
