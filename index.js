import express from "express";
import * as https from "https";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
const city= "berlin";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

app.get("/", (req,res) => {
    https.get(url, (response) =>{
       
        if(response.statusCode == 200){
            response.on("data",(d) =>{
                const weatherData = JSON.parse(d);
                res.send(weatherData)
            })
        } else{
            console.log("Somthing went wrong")
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });