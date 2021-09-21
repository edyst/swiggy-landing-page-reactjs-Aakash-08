import React from 'react'
import HEADSECTION from './Components/Headsection/head'
import FEATURES from './Components/Features/features'
import RESTAURANTS from './Components/Restaurants/restaurants'
import FOOTER from './Components/Footersection/footer'
import './App.css';


function App() {
  return (
    <div className="body">
      <HEADSECTION />
      <FEATURES />
      <RESTAURANTS />
      <FOOTER />
    </div>
  )
}

export default App;