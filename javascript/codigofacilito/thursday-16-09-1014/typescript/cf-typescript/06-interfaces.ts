//type
type song = {
    name:string;
    year:number;
}


//interfaces
interface IAlbum{
    readonly name: string;
     year: number;
 }

interface ISong{
   readonly name: string;
    year: number;
}

//extended
interface ISong2 extends IAlbum{
        compositors?:string;
}
const mySon:ISong = {
    name: "el rebelde",
    year: 2015
}
function getSongDetails(song: ISong): string {
    return `Title: ${song.name}, Year: ${song.year}`;
}