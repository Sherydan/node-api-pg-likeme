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

const addPost = async (payload) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)"
    const values = [payload.titulo, payload.url, payload.descripcion, 0]
    const result = await pool.query(consulta, values)
    return result.rows
}

module.exports = {getPosts, addPost}