import axios from "axios";
import { getValidationError } from "../utilities/getValidationError";

const CHARACTERS_BASE_URL = `http://gateway.marvel.com/v1/public`

const axiosInstanceCharacters = axios.create({
    baseURL: CHARACTERS_BASE_URL,
    params: {
        ts: '1',
        apikey: process.env.VITE_PUBLIC_API_KEY,
        hash: process.env.VITE_MD5_HASH_KEY,
    },
})

axiosInstanceCharacters.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa, devolver solo los datos
        return response.data;
    },
    (error) => {
        /* // Si hay un error en la respuesta, manejarlo y devolver un objeto de error coherente
        if (error.response) {
            // Si la respuesta contiene información, devolver el mensaje de error de la API
            return Promise.reject({
                status: error.response.status,
                message: error.response.data.message || "Ocurrió un error desconocido",
            });
        } else if (error.request) {
            // Si no hay respuesta, el servidor no respondió, devolver un mensaje de error
            return Promise.reject({
                status: 500,
                message: "No se pudo conectar con el servidor",
            });
        } else {
            // Si hay otro tipo de error, devolver un mensaje de error genérico
            return Promise.reject({
                status: 500,
                message: "Ocurrió un error desconocido",
            });
        } */
        return Promise.reject(getValidationError(error.code))

    }
);

export default axiosInstanceCharacters