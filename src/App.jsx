
import './App.css'
import { globalContext } from './context'
import { router } from './routers'
import { RouterProvider } from 'react-router-dom'
function App() {
  const user = {
    username : 'Iklil'
  }
  return (  
      <div className='App'>
        <globalContext.Provider value={user}>
          <RouterProvider router={router}/>
        </globalContext.Provider>
      </div>
  )
}

export default App
