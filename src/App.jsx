import React from 'react'
import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from './globalStyles'
import MainRoutes from './routes'
import { ToastContainer } from 'react-toastify'
import Authorization from 'components/Authorization'
import Loading from 'components/Loading'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Loading />
      <MainRoutes />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
