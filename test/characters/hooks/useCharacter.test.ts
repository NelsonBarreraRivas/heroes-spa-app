
import { renderHook, waitFor } from "@testing-library/react";
import useCharacter from "../../../src/characters/hooks/useCharacter";
import useCharacterByName from "../../../src/characters/hooks/useCharacterByName";
import useCharacterId from "../../../src/characters/hooks/useCharacterId";

describe('Pruebas en useCharacter', () => {

    const queryByName = {
        nameStartsWith: 'Spider'
    }
    const queryById = {
        characterId: 1017100
    }

    test('debe de retornar la data de los characters', async () => {


        const { result  } = renderHook(() => useCharacter() )

        await waitFor(
            () => expect( result.current.data?.length ).toBeGreaterThan(0)
        )
        
    });

    test('debe de retonar charaters por NAME', async () => {

        const { result  } = renderHook(() => useCharacterByName( { ...queryByName } ) )

        await waitFor(
            () => expect( result.current.data?.length ).toBeGreaterThan(0)
        )

        expect(result.current.data![0].name).toContain( queryByName.nameStartsWith )

    });

    test('debe de retornar el character por ID', async () => {

        const { result  } = renderHook(() => useCharacterId( { ...queryById } ) )

        await waitFor(
            () => expect( result.current.data?.id ).toEqual( queryById.characterId )
        )
        
        expect(result.current.data).toBeTruthy()
    });

});