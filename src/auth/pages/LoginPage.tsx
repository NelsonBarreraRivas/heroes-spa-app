import { FormEvent, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingPage } from "../../ui/components/LoadingPage"
import { AuthContext } from "../context"


export const LoginPage = () => {

    const { onLogin } = useContext( AuthContext )

    const navigate = useNavigate()

    const handleSubmit = (event : FormEvent)  => {

        event.preventDefault()

        const lastPath = localStorage.getItem('lastPath') ?? '/'

        onLogin('Nelson', 'nelsonbr')

        navigate(lastPath, {replace: true} )
    }


    return (
        <div className="relative">

            <LoadingPage time={500} />

            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
                        <input type="hidden" name="remember" value="true" />
                        <div className="flex flex-col gap-4 rounded-md shadow-sm">
                            <div>
                                <label className="sr-only">Name</label>
                                <input name="text" type="name" className="outline-none block w-full rounded-t-md border-0 py-3 text-base px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:leading-6" placeholder="Username" />
                            </div>
                            <div>
                                <label className="sr-only">Email address</label>
                                <input name="email" type="email" className="outline-none block w-full rounded-t-md border-0 py-3 text-base px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:leading-6" placeholder="Email address" />
                            </div>
                            <div>
                                <label className="sr-only">Password</label>
                                <input  name="password" type="password" className="outline-none block w-full rounded-b-md border-0 py-3 text-base px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:leading-6" placeholder="Password" />
                            </div>
                        </div>



                        <div>
                            <button className="flex w-full justify-center rounded-md bg-red-600 py-2 px-3 text-lg font-semibold text-white hover:bg-red-500">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
