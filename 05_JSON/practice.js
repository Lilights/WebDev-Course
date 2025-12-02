let song1 = {
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "duration": 233,
    "genre": "Pop"
}
//clone song1 into {} and put it in song2, diff objs
let song2 = Object.assign({}, song1);
let { title, duration } = song2;


// Iterate using for...in
for (let key in song1) {
    console.log(`${key}: ${song1[key]}`);
}


let playlist =
{
    "playlistName": "My Favorites",
    "createdBy": "John",
    "songs": [
        {
            "title": "Shape of You",
            "artist": "Ed Sheeran",
            "duration": 233
        },
        {
            "title": "Blinding Lights",
            "artist": "The Weeknd",
            "duration": 200
        }
    ]
}




const jsonText = JSON.stringify(playlist);
let playlist2 = JSON.parse(jsonText);

//save the playlist text as key in brower client local storage 
localStorage.setItem("playlist", jsonText);
let storageText = localStorage.getItem("playlist", jsonText);
let playlist3 = JSON.parse(storageText);