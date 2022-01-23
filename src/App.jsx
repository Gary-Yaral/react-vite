import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar';
import { Block } from './components/Block'

const data = [
  {
    id: +new Date(),
    name: 'Shoes',
    items: [
      {
        id: +new Date(),
        name: 'Nike',
        price: 29.99,
        url: 'https://chemasport.es/6614-thickbox_default/zapatillas-nike-revolution-3-gs-rosa-negro.jpg'
      }
    ]
  }
]

function App() {
  const [ sections, setSections ] = useState([...data]); 

  return (
    <div className="App">
      <Navbar />
      {
        sections.map(section => {
          return (
            <Block section = { section } key= { section.id }/>
          )
        })
      }
    </div>
  )
}

export default App
