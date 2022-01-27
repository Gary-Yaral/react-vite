import { useState, useEffect } from 'react';
import './css/App.css'
import { Navbar } from './components/Navbar';
import { Block } from './components/Block';
import { SearchResult} from './components/SearchResult';
import Payment from './components/Payment';
import { connect } from 'react-redux';
import { hidePayment, loadSections } from './redux/actions';

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
        name: 'Nike women',
        price: 29.99,
        url: 'https://i.pinimg.com/736x/6d/44/1a/6d441a6c91e5b28ea248068075e54fc7--nike-dunks-sequoia.jpg'
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

function App({ 
  paymentState, 
  hidePayment, 
  loadSections, 
  search
}) {
  const [ sections, setSections ] = useState([...data]); 
  const [ searchData, setSearchData ] = useState(search); 
  useEffect(()=>{
    loadSections(sections);
  },[])

  useEffect(() => {
    setSearchData(search)
  },[search])
  
  return (
    <div className="App">
      <Navbar />
  
      {
        typeof search[0] === 'object' ? <SearchResult items= { search }/> :
        typeof search[0] === 'string' ? <div className="not-results"> Not results </div>:
        <></>
      }

      {
        typeof search[0] === 'boolean' || search[0] === undefined ? sections.map(section => {
          return (
            <Block section = { section } key= { section.id }/>
          )
        }) : <></>
      }
      <Payment paymentState= {paymentState} hidePayment = {hidePayment}/>
    </div>
  )
}

const renderPayment = (state)=> {
  return {
    paymentState: state.pay,
    load:state.load,
    search: state.search
  }
}

const activateReducers = (dispatch)=> {
  return {
    hidePayment: () => dispatch(hidePayment()),
    loadSections: (arr) => dispatch(loadSections(arr)),
  }
}


export default connect(renderPayment, activateReducers)(App)
