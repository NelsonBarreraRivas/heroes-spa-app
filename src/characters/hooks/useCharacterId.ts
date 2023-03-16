import { useState, useEffect } from "react";
import { Character } from "../interfaces/character"; // Importar el tipado de Character
import axiosInstanceCharacters from "../../service/axios.instance"; // Importar la instancia de axios
import { Data } from "../../interfaces/data";

// Definir el tipo de los parametros del hook
type UseAxiosCharacterParams = {
    characterId: number; // Nuevo parámetro para el ID del personaje
};

// Definir el tipo del estado que retornará el hook
type UseAxiosCharacterState = {
    loading: boolean;
    error: string | unknown;
    data: Character | null;
};

// Definir el hook personalizado
const useCharacterId = (params: UseAxiosCharacterParams ): UseAxiosCharacterState => {
    // Definir el estado inicial del hook
    const [state, setState] = useState<UseAxiosCharacterState>({
        loading: true,
        error: null,
        data: null,
    });

    // Definir la función que realizará la petición a la API
    const fetchData = async ( characterId : number) => {
        try {
            // Actualizar el estado para indicar que se está cargando la data
            setState({
                loading: true,
                error: null,
                data: null,
            });

            const endpoint = `/characters/${characterId}`;


            
            // Realizar la petición a la API
            const { data : { results }}  = await axiosInstanceCharacters.get<Data>(endpoint);

            // Actualizar el estado con la data obtenida
            setState({
                loading: false,
                error: null,
                data : results[0],
            });
        } catch (error) {
            // Si ocurre un error, actualizar el estado con el mensaje de error
            setState({
                loading: false,
                error: error,
                data: null,
            });

        }
    };

    // Realizar la petición a la API cuando el componente se monte
    useEffect(() => {
        fetchData( params.characterId );
    }, []);

    // Retornar el estado actual del hook
    return {
        ...state
    }
};

export default useCharacterId;
