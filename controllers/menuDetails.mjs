import express from "express"
import { pool } from "../db/connectDb.mjs"

const app = express()
app.use(express.json())

export const menuDetails = async(req,res)=>{
    try {
        const querryMenuDetails =`INSERT INTO  "menuDetails"(id, description, name, date, price, "userOrder_rating", "chefTable_id", "menuPhoto")
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`
        const {id,description,name,date,price,userOrder_rating,chefTable_id,photoUrl}=req.body
       
        await pool.query(querryMenuDetails, [id,description,name,date,price,userOrder_rating,chefTable_id,photoUrl])

        return  res.json({info:"menu added"})
    } catch (error) {
        console.error(error)
        return res.status(500).send({error:"internal server error"})
    }
}
