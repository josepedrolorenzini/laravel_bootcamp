//typoes

type DATO = {
    name: string;
    age?: number; // ? make the parameter optional
    country: string;
};
const persona1:DATO = {
    name: "John Doe",
    age: 30,
    country: "USA"
}

/// INTERFACE
interface DATA{
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    hobbies: string[];
}

const data:DATA = {
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "12345"
    },
    "hobbies": ["reading", "painting", "cooking"]
}

const DATA2:{
    name: string;
    age: number;
} = {
    "name": "Jane Doe",
    "age": 25
}





////// objetos anidados

//album
type Album = {
    title: string;
    year: number;
    songs: string[];
}


type Song = {
    name: string;
    duration:number;
    album?: Album;
}

const firstSong:Song = {
    name:"las flores",
    duration: 3.5,
    album: {
        title: "El reino del ruido",
        year: 2020,
        songs: ["firstSong", "lastSong"]
    }
}

if(firstSong.album){
    console.log(firstSong.album.title)
}


//intersection types
type AwardedSong = {} & {
    name: string;
    duration: number;
    album?: Album;
}

const myFavoriteSongIn2010:AwardedSong = {
    name: "Heartbreak Hotel",
    duration: 4.2,
  
}