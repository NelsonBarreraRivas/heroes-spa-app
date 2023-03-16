import { FC } from "react"
import { Link } from "react-router-dom"
import { Character } from "../../characters/interfaces/character"

interface propsListItem {
    item: Character
}

export const ListItem: FC<propsListItem> = ({ item }) => {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col animate__animated animate__fadeIn">
            <img className="rounded-t-lg h-[298px] object-cover bg-center" src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.name} />
            <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                <Link to={`/character/${item.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
                </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap w-52 md:w-full">{item.description}</p>
                </div>

                <Link to={`/character/${item.id}`} className="flex justify-center items-center px-3 py-2 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none">
                    View Character
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

    )
}
