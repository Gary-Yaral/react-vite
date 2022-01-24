import './css/components.css'
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';

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
      <section className= {!switchModal ? "cart-modal modal-hidden": "cart-modal"} >
        <div className='cart-items-container'>
          {
            items.length > 0 ? items.map(item => {
              return (
                <div className ="cart-item" key={"item_"+item.id}>
                  <ion-icon name="trash"></ion-icon>
                  <img src={item.url} alt={item.name}/>
                  <section>
                    <h3 className="item-title">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div className='item-buttons'>
                      <ion-icon name="remove-circle"></ion-icon>
                      <div>{item.quantity}</div>
                      <ion-icon name="add-circle"></ion-icon>
                    </div>
                  </section>
                </div>
              )
            }) : "Not products yet"
          }
        </div>
        { items.length > 0 ?
          (<section className="cart-footer">
            <div className="cart-total">
              <strong>Total: $</strong>{total.toFixed(2)}
            </div>
            <div className='cart-buttons'>
              <button className='cart-btn btn-clear'>
                Remove all
              </button>
              <button className='cart-btn btn-pay'>
                To Pay
              </button>
            </div>
          </section>) : <></>
        }
      </section>
    </div>
  )
}

const counterItems = state => {
  return {
    cart: state.shop
  }
}

export default connect(counterItems)(IconCart)