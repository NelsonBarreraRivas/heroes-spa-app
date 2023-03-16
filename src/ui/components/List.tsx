import { FC } from "react"
import { Character } from "../../characters/interfaces/character"
import { ListItem } from "./ListItem"


type typeList =
        | { type: 'multiple-cols' }
        | { type: 'simple-cols' }

interface propsList {
    data: Character[]
    typeList: typeList
}


export const List: FC<propsList> = ({ data, typeList }) => {

    const className = typeList.type === 'multiple-cols' ? 'flex flex-col items-center md:items-inherit md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 justify-center' : 'grid grid-cols-1 gap-4 my-8 justify-center justify-items-center'
    
    return (
        <ul className={className} data-testid="list-data">

            {
                data.map( item => <ListItem  item={item} key={ item.id }/> )
            }
        </ul>
    )
}
