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
    const result = await fetch(`https://v1.nocodeapi.com/om1719/spotify/JVijqexPXnnsIxXm/search?q=${req.body.songname}`)
    const songData = await result.json();
    // console.log(songData.albums[0].external_urls);
    res.render("home.ejs",{songData});
    
})