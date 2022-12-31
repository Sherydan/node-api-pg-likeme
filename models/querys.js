const {Pool} = require("pg");
require('dotenv').config()
const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

const getDate = async () => {
    const result = await pool.query("SELECT NOW()");
    console.log(result);
};

const getPosts = async () => {
    const {rows} = await pool.query("SELECT * FROM posts")
    return rows
}




module.exports = {getDate}