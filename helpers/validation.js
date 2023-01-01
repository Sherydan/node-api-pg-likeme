const validateInput = (payload) => {
    console.log(payload)
    if (
        payload.titulo.length === 0 ||
        payload.url.length === 0 ||
        payload.descripcion.length === 0
    ) {
        return false;
    }
    return true;
};


module.exports = {validateInput}