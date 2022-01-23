import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar';
import { Block } from './components/Block';

const data = [
  {
    id: +new Date(),
    name: 'Shoes',
    items: [
      {
        id: Math.random(36),
        name: 'Nike',
        price: 29.99,
        url: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df3fa19/products/NI_AQ2730-400/NI_AQ2730-400-1.JPG'
      },
      {
        id: Math.random(36),
        name: 'Reebok',
        price: 35.25,
        url: 'https://ferreira.vteximg.com.br/arquivos/ids/334728-1000-1000/re_eg6422.jpg?v=637163373401200000'
      },
      {
        id: Math.random(36),
        name: 'Adidas',
        price: 29.99,
        url: 'https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/f/3/f36921-001__2.jpg'
      },
      {
        id: Math.random(36),
        name: 'Volcom',
        price: 29.99,
        url: 'https://www.bfgcdn.com/1500_1500_90/024-0480/volcom-draw-lo-shoe-zapatillas-deportivas-detail-6.jpg'
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
