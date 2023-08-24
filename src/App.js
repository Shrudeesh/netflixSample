
import React from 'react'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { Action,originals,Comedy,Horror,Romance,Document} from "./url"
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action Movies' isSmall />
      <RowPost url={Comedy} title='Comedy Movies' isSmall />
      <RowPost url={Horror} title='Horror Movies' isSmall />
      <RowPost url={Romance} title='Romance Movies' isSmall />
      <RowPost url={Document} title='Document Aries' isSmall />
    </div>
  )
}

export default App
