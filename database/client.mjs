import pkg from 'pg';
const { Client } = pkg;

export const client = new Client({
    user : "homecheftrial_admin",
    password :"homechef",
    host : "localhost",
    port : 5432,
    database: process.env.DATABASE

})
