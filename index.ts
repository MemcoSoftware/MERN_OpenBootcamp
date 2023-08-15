import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';


// env. file configuration

dotenv.config();


// Create Express APP

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Define the first APP Route

app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to API Restful Express + Nodemon + Jest + TS + React + Swagger + Mongoose');
});


app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route: Hello');
});



// Execute APP and Listen Request to PORT 

app.listen(port, ()=> {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
});


