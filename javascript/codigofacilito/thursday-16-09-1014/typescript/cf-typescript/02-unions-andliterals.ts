//initial
//pipe operators
let myFavoritebands = Math.random() > 0.5 ? "soda stereo" : 0;

let myFavoriteBAND : undefined | string| null = undefined;
myFavoriteBAND = "black sabbath";
myFavoriteBAND.indexOf("black sabbath")

//optional chaining

myFavoriteBAND = undefined ;
myFavoriteBAND = "string" ;
if(typeof myFavoriteBAND === "string"){
    myFavoriteBAND?.length ;
}
console.log(myFavoriteBAND)



//type aliases
type Favorite = undefined | string| null ; 
let myFavoriteGenre : Favorite = undefined ;