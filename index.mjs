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