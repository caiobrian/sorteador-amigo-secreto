import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Form } from './components/Form/Form'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Header />
          <Route path="/" element={Form} />
          <Footer />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
