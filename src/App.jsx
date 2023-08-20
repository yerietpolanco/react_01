// import { useState } from 'react'
import './assets/App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

import dalmata from './assets/images/dalmata.jpg'
import husky from './assets/images/husky.jpg'
import basset from './assets/images/basset.jpg'
import setter from './assets/images/setter.jpg'

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="d-flex gap-5">
        <Card 
          name="Loki"
          image={dalmata}
          description="Es un perrito muy jugueton y amigable"
          bg="success"
          text="Dalmata"
        />
        <Card 
          name="Thor" 
          image={husky}
          description="Es un perrito muy jugueton y amigable"
          bg="info"
          text="Husky"
        />
        <Card 
          name="Hush" 
          image={basset}
          description="Es un perrito muy jugueton y amigable"
          bg="warning"
          text="Basset Hound"
        />
        <Card 
          name="Sultan" 
          image={setter}
          description="Es un perrito muy jugueton y amigable"
          bg="danger"
          text="Setter Írlandes"
        />
      </div>
      <Footer />
    </>
  )
}

export default App
