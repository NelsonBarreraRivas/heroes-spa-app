import queryString from "query-string"
import { FormEvent } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { List } from "../../ui/components/List"
import { ListSkeleton } from "../../ui/components/skeleton/ListSkeleton"
import useCharacterByName from "../hooks/useCharacterByName"


export const SearchCharacter = () => {

    const navigate = useNavigate()
    
    const { search } = useLocation()

    const { q = '' } = queryString.parse(search)

    const query = (q && typeof q === "string") ? q.toLowerCase().trim() : ''

    const { data, loading } = useCharacterByName({ nameStartsWith: q })


    const showSearch = (q?.length === 0)
    const showError = (q!.length > 0) && data?.length === 0

    const { onChangue, onResetForm, searchText } = useForm({
        searchText: query
    })

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
        onResetForm()
    }


    return (
        <div className="">
            <h1 className="text-center text-4xl py-6 underline">Search Character</h1>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                <div className="sm:col-span-5">
                    <h4 className="text-2xl">Searching:</h4>
                    <form onSubmit={onSubmit} role='form'>
                        <input
                            name="searchText"
                            type="search"
                            value={searchText}
                            onChange={onChangue}
                            className="outline-none block w-full rounded-t-md border-0 py-3 text-base px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:leading-6"
                            placeholder="Search.... Enter."
                            autoComplete="off"
                        />

                    </form>
                </div>
                <div className="sm:col-span-7">
                    <h4 className="text-2xl">Results:</h4>
                    <div style={{ display: showSearch ? '' : 'none' }} className="animate__animated animate__fadeIn bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" aria-label="alert">
                        <p className="font-bold">Informational message</p>
                        <p className="text-base">Search to Character.</p>
                    </div>
                    <div style={{ display: showError ? '' : 'none' }} className="animate__animated animate__fadeIn bg-red-100 border-t border-b border-red-500 text-red-500 px-4 py-3" aria-label="alert">
                        <p className="font-bold">Informational message</p>
                        <p className="text-base">There's no result with <b>{q}</b>.</p>
                    </div>

                    {
                        loading ?
                            <ListSkeleton numberSkeletons={1} typeList={{ type: 'simple-cols' }} /> :
                            <List data={data || []} typeList={{ type: 'simple-cols' }} />

                    }
                </div>
            </div>
        </div>
    )
}
