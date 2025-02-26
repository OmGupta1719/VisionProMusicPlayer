import express from "express"
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";



dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NO_CODE_API_SPOTIFY = process.env.NO_CODE_API_SPOTIFY; // Secure API Key

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("public", path.join(__dirname, "public"));
app.set("audio", path.join(__dirname, "audio"));

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

//Get searched name
app.post("/submit",async (req,res)=>{
    console.log(req.body.songname);
    const result = await fetch(`${NO_CODE_API_SPOTIFY}/search?q=${req.body.songname}&type=track`);
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