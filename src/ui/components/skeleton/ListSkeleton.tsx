import { FC } from "react"
import { createNumberArray } from "../../../utilities/createNumberArray"
import { ListItemSkeleton } from "./ListItemSkeleton"

type typeList =
        | { type: 'multiple-cols' }
        | { type: 'simple-cols' }

interface propsListSkeleton{
    numberSkeletons: number,
    typeList: typeList
}

export const ListSkeleton : FC<propsListSkeleton> = ( { numberSkeletons, typeList }) => {

    const skeletons = createNumberArray(numberSkeletons)

    const className = typeList.type === 'multiple-cols' ? 'flex flex-col items-center md:items-inherit md:flex-none md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 justify-center' : 'grid grid-cols-1 gap-4 my-8 justify-center justify-items-center'

    return (
        <ul className={className}>
            {
                skeletons.map( (_, index) => <ListItemSkeleton  key={index} />)
            }
        </ul>
    )
}
