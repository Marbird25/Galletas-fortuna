
import './App.css'
import Cookies from './components/Cookies'
import Phrases from './data/phrases.json'
import { useState } from 'react'

function App() {

  const image = ["url(/fondo1.jpg", "url(/fondo2.jpg", "url(/fondo3.jpg", "url(/fondo4.jpg", "url(/fondo1.jpg", "url(/fondo2.jpg", "url(/fondo3.jpg", "url(/fondo4.jpg", "url(/fondo1.jpg", "url(/fondo2.jpg", "url(/fondo3.jpg", "url(/fondo4.jpg", "url(/fondo1.jpg", "url(/fondo2.jpg", "url(/fondo3.jpg", "url(/fondo4.jpg"]

  const [fortune, setFortune] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  
const changePhrase = () => {

  setFortune (Math.floor(Math.random()*Phrases.length))
  setImageIndex (Math.floor(Math.random()* image.length))

}
   
  return (
    <div className="App" style={ {backgroundImage: image[fortune]} }>
   
    <Cookies
    phrasesData = {Phrases[fortune]}/>
    
    <button onClick={changePhrase}> Ver otro</button>
    
    </div>
  )

}
export default App
