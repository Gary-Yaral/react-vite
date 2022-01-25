import './css/components.css'
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';
import Cart from './Cart'

function IconCart ({ cart }) {
  const [cartCounter, setCounter] = useState(0);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [switchModal, setSwitchModal] = useState(false);

  useEffect(() => {
    setItems([...cart]);
    setTotal
  },[cart])

  useEffect(() => {

    let counter = 0;
    let total = 0;

    cart.forEach(item => {
      counter += item.quantity;
      total += (item.quantity * item.price)
    })
    setCounter(counter);
    setItems([...cart]);
    setTotal(total);

  }, [cartCounter, cart]);

  function showAndHiddeCart(evt) {
    evt.preventDefault();
    !switchModal ? setSwitchModal(true):
                   setSwitchModal(false);          
  }

  return (
    <div className ="icon-container">
      <a href="#" className="iconCart" onClick= {(evt) => showAndHiddeCart(evt)}>
        <div className="counterItems">{ cartCounter }</div>
        <ion-icon name="cart"></ion-icon>
      </a>
      <Cart 
        isActive = { switchModal } 
        total = { total }
        items = { items }
        />
    </div>
  )
}

const counterItems = state => {
  return {
    cart: state.shop
  }
}

export default connect(counterItems)(IconCart)