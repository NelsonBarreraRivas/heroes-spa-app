import { List } from "../../ui/components/List"
import { ListSkeleton } from "../../ui/components/skeleton/ListSkeleton"
import useCharacter from "../hooks/useCharacter"


export const CharacterPage = () => {

    const { data, error, loading } = useCharacter()


    return (
        <>
            <h1 className="text-center text-4xl pt-6 underline">Characters Page</h1>
            {
                loading ?
                    <ListSkeleton numberSkeletons={4} typeList={{ type : 'multiple-cols'}}/> :
                    <List data={ data || [] } typeList={{ type : 'multiple-cols'}}/>
            }
        </>
    )
}
