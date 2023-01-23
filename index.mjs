<<<<<<< HEAD
import express from 'express'
import { menuDetails } from './controllers/menuDetails.mjs'
import { dbConnect } from './database/connectDb.mjs'

const app = express()
app.use(express.json())
dbConnect()

app.get('/', (req, res) => res.send( "db connected" ))
app.post('/menu',menuDetails)

const PORT = 3001
app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))
=======
import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import cookie from 'cookie-parser';
import dbConnect from './database/dbConnect.mjs';
import cors from 'cors';
import {cuisineType, getAllCuisines, getOneCuisine} from './controllers/cuisineType.mjs';
import {chefTable, getAllChefTables} from './controllers/chefTable.mjs';
import {menuDetails} from './controllers/menuDetails.mjs';
dotenv.config();
dbConnect();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cookie());
app.use(cors({origin: 'http://127.0.0.1:5500'}));


//Cuisine Types
app.post('/cuisine_type', cuisineType);
app.get("/cuisine_type", getAllCuisines);
app.get("/cuisine_type/:id", getOneCuisine);

// Chef table info
app.post('/chef_table', chefTable);
app.get('/chef_table', getAllChefTables);

//Menu details
app.post('/menu_details', menuDetails);

app.listen(PORT, () => console.log(`Server started: localhost`))
>>>>>>> 44269e19d75a03842b7fd7534b419a3195350ab5
