import { lazy, Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Home = lazy(() => import('./components/Home/Home'))
const NotFound = lazy(() => import('./components/NotFound/NotFound'))
const Nasa = lazy(() => import('./components/Nasa/Nasa'))
const Instagram = lazy(() => import('./components/Instagram/Instagram'))
const Marvel = lazy(() => import('./components/Marvel/Marvel'))
const RnM = lazy(() => import('./components/RnM/RnM'))

import Loading from './components/Loading/Loading'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route index element={<Home />} />

          <Route element={<Navbar />}>
            <Route path="nasa" element={<Nasa />} />
            <Route path="instagram" element={<Instagram />} />
            <Route path="marvel" element={<Marvel />} />
            <Route path="rickandmorty" element={<RnM />} />
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Suspense >
    </BrowserRouter>

  )
}

export default App
