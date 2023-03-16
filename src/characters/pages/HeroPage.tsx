import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import useCharacterId from "../hooks/useCharacterId";

export const HeroPage = () => {

    const { id = ''} = useParams()

    const navigate = useNavigate()

    const { loading, data } = useCharacterId({ characterId: Number(id) })

    const onNavigateBack = () => {
        navigate(-1);
    }


    if (!loading && !data) {
        return <Navigate to={'/error-404'} replace />
    }


    return (
        !loading && data ?
            (
                <div className="my-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <h1 className="text-4xl text-center">{data?.name}</h1>
                        <button onClick={onNavigateBack} className="block justify-center items-center px-3 py-2 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none">
                            Go Back
                        </button>
                    </div>


                    <article className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" aria-label="article-character">
                        <div className="animate__animated animate__fadeInLeft">
                            <img className="object-cover" src={data?.thumbnail.path + '.' + data?.thumbnail.extension} alt={data?.name} />

                        </div>
                        <div>
                            <p className="text-2xl text-red-600">Comics:</p>
                            <ul>
                                {data?.comics.items.map(comic => <li key={comic.name}>{comic.name}</li>)}
                            </ul>
                            <p className="text-2xl text-red-600">Stories:</p>
                            <ul>
                                {data?.stories.items.map(story => <li key={story.name}>{story.name}</li>)}
                            </ul>
                            <p className="text-2xl text-red-600">Series:</p>
                            <ul>
                                {data?.series.items.map(serie => <li key={serie.name}>{serie.name}</li>)}
                            </ul>
                        </div>
                    </article>
                </div>
            ) :
            (
                <></>
            )
    )
}
