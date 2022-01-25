import { connect } from 'react-redux';
import { substractToCart, addToCart, removeItem, removeAll } from '../redux/actions'

function Cart(
  {
    isActive, 
    items, 
    total, 
    substractToCart, 
    addToCart,
    removeItem,
    removeAll
  }) {

  return (
    <section className= {!isActive ? "cart-modal modal-hidden": "cart-modal"} >
      <div className='cart-items-container'>
        {
          items.length > 0 ? items.map(item => {
            return (
              <div className ="cart-item" key={"item_"+item.id}>
                <ion-icon name="trash" onClick={() => removeItem(item.id)}></ion-icon>
                <img src={item.url} alt={item.name}/>
                <section>
                  <h3 className="item-title">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className='item-buttons'>
                    <ion-icon name="remove-circle" onClick={() => substractToCart(item.id)}></ion-icon>
                    <div>{item.quantity}</div>
                    <ion-icon name="add-circle" onClick={() => addToCart(item)}></ion-icon>
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
            <button className='cart-btn btn-clear' onClick= {()=> removeAll()}>
              Remove all
            </button>
            <button className='cart-btn btn-pay'>
              To Pay
            </button>
          </div>
        </section>) : <></>
      }
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    substractToCart: (id) => dispatch(substractToCart(id)),
    addToCart: (item) => dispatch(addToCart(item)),
    removeItem: (id) => dispatch(removeItem(id)),
    removeAll: () => dispatch(removeAll())
  }
}

export default connect(null, mapDispatchToProps)(Cart);