import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth/context'
import './index.css'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <AuthProvider>
      <RouterProvider  router={ router }/>
    </AuthProvider>
  //</React.StrictMode>,
)
