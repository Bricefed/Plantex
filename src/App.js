import 'remixicon/fonts/remixicon.css' // Library Icon
import './styles/index.scss'
import Headers from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'
import ThemeContextProvider from './context/ThemeContext'


function App() {

  return (
    <ThemeContextProvider>
      <Headers />
      <Main />
      <Footer />
      <ScrollUp />
    </ThemeContextProvider>
  )
}

export default App
