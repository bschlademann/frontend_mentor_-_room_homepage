import './App.css'
import { AboutProduct } from './components/AboutProduct'
import { Carousel } from './components/Carousel'
import { Navigation } from './components/Navigation'

function App() {
return (
    <main>
        <Navigation />
        <Carousel/>
        <AboutProduct/>
    </main>
)
}

export default App
