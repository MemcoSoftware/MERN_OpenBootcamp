import express, { Express, Request, Response, Router } from "express";


// Security

import cors from 'cors';
import helmet from 'helmet';


// TODO HTTPS

// Routes
import rootRouter from '../routes';




// * Create Express APP

const server: Express = express();


// Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// From this point onover: http://logalhost:8000/api/...
server.use(
    '/api',
    rootRouter
    );

// TODO Mongoose Connection

// * Security Connection

server.use(helmet())
server.use(cors())

// * Content Type Config
server.use(express.urlencoded(({ extended: true, limit: '50mb'})))
server.use(express.json(({ limit: '50mb' })));

// * Redirections Config

//  http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) =>{
    res.redirect('/api');
});

export default server;

