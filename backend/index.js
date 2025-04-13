import express, { request,response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1 : Allow All Origins with default of cors(*)
app.use(cors());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcome to MERN-Stack")
});

app.use('/books',booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT,()=>{
            console.log(`App is listening to port: ${PORT}`);    
        });
    })
    .catch((err) => {
        console.log(err);
    });