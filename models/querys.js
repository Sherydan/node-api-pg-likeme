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

const addLike = async (payload) => {
    
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id=$1"
    const values = [payload.id]
    try {
        const result = await pool.query(consulta, values)
        return result.rows
    } catch (error) {
        console.log("error while updating posts", error.code, error.message)
        throw new Error(error)
    }
}

const findPost = async (payload) => {
    const consulta = "SELECT * FROM posts WHERE id=$1"
    const values = [payload]

    try {
        const result = await pool.query(consulta, values)
        return result.rows
    } catch (error) {
        console.log("error while searching post", error.code, error.message);
        throw new Error(error)
    }
}

const deletePost = async (payload) => {
    const consulta = "DELETE FROM posts WHERE id = $1"
    const values = [payload]

    try {
        const result = await pool.query(consulta, values)
        return result.rows
    } catch (error) {
        console.log("error while deleting post", error.code, error.message)
        throw new Error(error)
    }
}

module.exports = { getPosts, addPost, addLike, findPost, deletePost };
