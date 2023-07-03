
//TRAER los datos almacenados en LS, si no hay, devuelve un valor por defecto:
const get = (key) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
        return [];
    } else {
        return JSON.parse(localStorageData);
    };
}

// Función que ALMACENA una propiedad y su valor en el local storage
const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
};

// Función que ELIMINA una propiedad del local storage
const remove = (key) => {
    localStorage.removeItem(key);
};

// Función que limpia todo el local storage
const clear = () => {
    localStorage.clear();
};


//Creamos un objeto con el que EXPORTAMOS las funciones anteriores:
const objectToExport = {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;