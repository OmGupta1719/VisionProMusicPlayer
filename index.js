import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

//Get searched name
app.post("/submit",async (req,res)=>{
    console.log(req.body.songname);
    const result = await fetch(`https://v1.nocodeapi.com/om1719/spotify/JVijqexPXnnsIxXm/search?q=${req.body.songname}&type=track`);
    const songData = await result.json();
    const one = songData.tracks.items[0];
    const two = songData.tracks.items[1];
    const three = songData.tracks.items[2];
    const four = songData.tracks.items[3];
    const five = songData.tracks.items[4];
    const six = songData.tracks.items[5];
    const seven = songData.tracks.items[6];
    res.render("home.ejs",{
        songOne : one,
        songTwo : two,
        songThree : three,
        songFour : four,
        songFive : five,
        songSix : six,
        songSeven : seven
    });
})