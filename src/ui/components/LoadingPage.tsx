import { FC, useLayoutEffect, useRef } from 'react'
import ReactLoading from 'react-loading'

interface Props{
    time?: number
}

export const LoadingPage : FC<Props> = ( { time = 1500 } ) => {

    const divRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const loadingHide = setTimeout(() => {
            divRef && divRef.current?.classList.add('hidden-loading')
        }, time)

        return () => clearTimeout(loadingHide)
    }, [])

    return (
        <div className="pre-loader absolute bg-white" ref={divRef}>
            <ReactLoading type="spokes" color="#dc2626" height={80} width={80} />
        </div>
    )
}
