import { Outlet } from "react-router-dom"
import { Navbar } from "./ui/components/Navbar"

import { LoadingPage } from "./ui/components/LoadingPage"

export const HeroesApp = () => {


    return (
        <div className="relative">

            <LoadingPage time={800}/>

            <Navbar />

            <main className="container m-auto">
                <Outlet />
            </main>
        </div>
    )
}
