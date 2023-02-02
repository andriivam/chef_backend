import express from "express"
import client from "../database/client.mjs";


const app = express()
app.use(express.json())

export const menuDetails = async(req,res)=>{
    try {

        const { description, name, date, price, userOrder_rating, chefTable_id, photoUrl } = req.body;
        console.log(req.body)
        const menuInfo = `INSERT INTO  "menuDetails"(description, name, date, price, "userOrder_rating", "chefTable_id", "photoUrl")
        VALUES ($1, $2, $3, $4,$5,$6,$7)`
        await client.query(menuInfo, [description, name, date, price, userOrder_rating, chefTable_id, photoUrl])

        return res.send({ info: "Menu added" })
    } catch (error) {
        console.error(error)
        return res.status(500).send({error:"internal server error"})
    }
}

export const getMenuDetails = async (req, res) => {
    try {
        const id = (req.params.id)
        let result = await client.query(`SELECT * FROM "menuDetails" 
                WHERE id = ${id};` )
        res.status(200).json(result.rows)
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error: something went wrong" })
    }
}

