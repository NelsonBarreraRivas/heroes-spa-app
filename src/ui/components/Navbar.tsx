import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context"

export const Navbar = () => {

    const { user, onLogout } = useContext( AuthContext )
    const navigate = useNavigate()

    const handleLogout = () => {

        onLogout()
        
        navigate('/login', { replace: true })
    }

    return (
        <nav className="bg-gray-100 w-full">
            <div className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center md:justify-between py-4 text-center">
                        <Link to={'/'} className="text-4xl hover:text-red-600">
                            HeroesApp
                        </Link>

                        <ul className="flex flex-col font md:flex-row sm:items-center text-lg text-gray-800 font-semibold gap-8">
                            <NavLink
                                to={'characters'}
                                className={({ isActive }) =>
                                    isActive ? 'text-red-600 border-b-2 border-b-red-400' : 'hover:text-red-600 transition-colors ease-in-out delay-75'
                                }
                            >
                                Marvel Characters
                            </NavLink>
                            <NavLink to={'search-character'}
                                className={({ isActive }) =>
                                    isActive ? 'text-red-600 border-b-2 border-b-red-400' : 'hover:text-red-600 transition-colors ease-in-out delay-75'
                                }
                            >
                                Search Character
                            </NavLink>

                            <button
                                className="text-gray-800 font-semibold border px-4 py-2 rounded-lg hover:text-red-600 hover:border-red-600 transition-colors ease-in-out delay-75"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>

                        <div className="sm:flex sm:items-center text-xl gap-4 hidden">
                            {/* <Link
                                to={'login'}
                                className="text-gray-800 font-semibold  hover:text-red-600 transition-colors ease-in-out delay-75"
                            >
                                Sign in
                            </Link> */}
                            <span>{ user?.name }</span>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
