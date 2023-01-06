const pool = require("../helpers/connectionDb").getInstance();

const getPosts = async () => {
    try {
        const { rows } = await pool.query("SELECT * FROM posts");
        return rows;
    } catch (error) {
        console.log("Error while getting posts");
        return error;
    }
};

const addPost = async (payload) => {
    try {
        const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)";
        const values = [payload.titulo, payload.url, payload.descripcion, 0];
        const result = await pool.query(consulta, values);
        return result.rows;
    } catch (error) {
        console.log(error);
        return error
    }
};

module.exports = { getPosts, addPost };
